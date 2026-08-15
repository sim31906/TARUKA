import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { fonts } from '../styles/theme';

function touchDist(touches) {
  return Math.hypot(touches[0].clientX - touches[1].clientX, touches[0].clientY - touches[1].clientY);
}

// ป็อปอัพดูรูปเต็ม — คลิก/แตะที่จุดใดก็ได้เพื่อขยาย (zoom เข้าตรงจุดนั้น) ลากเพื่อดูส่วนอื่นของรูปตอนขยาย
// รองรับ wheel zoom (เดสก์ท็อป) และ pinch-to-zoom (มือถือ) ลูกศร/ปัดเพื่อเลื่อนรูปถัดไป
export default function Lightbox({ images, startIndex = 0, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const [scale, setScale] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);

  const scaleRef = useRef(1);
  const panRef = useRef({ x: 0, y: 0 });
  const didDragRef = useRef(false);
  const touchRef = useRef(null);
  const areaRef = useRef(null);

  const zoomed = scale > 1;

  const resetZoom = useCallback(() => {
    scaleRef.current = 1;
    panRef.current = { x: 0, y: 0 };
    setScale(1); setPanX(0); setPanY(0);
  }, []);

  const idxRef = useRef(idx); idxRef.current = idx;
  const lenRef = useRef(images.length); lenRef.current = images.length;

  const goTo = useCallback((i) => { resetZoom(); setIdx(i); }, [resetZoom]);
  const prev = useCallback(() => goTo((idxRef.current - 1 + lenRef.current) % lenRef.current), [goTo]);
  const next = useCallback(() => goTo((idxRef.current + 1) % lenRef.current), [goTo]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') { if (scaleRef.current > 1) resetZoom(); else onClose(); }
      else if (e.key === 'ArrowLeft' && scaleRef.current <= 1) prev();
      else if (e.key === 'ArrowRight' && scaleRef.current <= 1) next();
    }
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next, resetZoom]);

  // touch: swipe (1 นิ้ว) / pan ตอนขยาย / pinch (2 นิ้ว)
  useEffect(() => {
    const el = areaRef.current;
    if (!el) return;

    function onStart(e) {
      if (e.touches.length === 1) {
        touchRef.current = {
          type: 'swipe', startX: e.touches[0].clientX, startY: e.touches[0].clientY,
          panStartX: panRef.current.x, panStartY: panRef.current.y, moved: false,
        };
      } else if (e.touches.length === 2) {
        touchRef.current = {
          type: 'pinch', startDist: touchDist(e.touches), startScale: scaleRef.current,
        };
      }
    }
    function onMove(e) {
      if (!touchRef.current) return;
      if (e.touches.length >= 2 || scaleRef.current > 1) e.preventDefault();

      if (e.touches.length === 2) {
        if (touchRef.current.type !== 'pinch') {
          touchRef.current = { type: 'pinch', startDist: touchDist(e.touches), startScale: scaleRef.current };
          return;
        }
        const ns = Math.min(5, Math.max(1, touchRef.current.startScale * (touchDist(e.touches) / touchRef.current.startDist)));
        scaleRef.current = ns; setScale(ns);
        return;
      }
      if (e.touches.length === 1 && touchRef.current.type === 'swipe') {
        const dx = e.touches[0].clientX - touchRef.current.startX;
        const dy = e.touches[0].clientY - touchRef.current.startY;
        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) touchRef.current.moved = true;
        if (scaleRef.current > 1) {
          const nx = touchRef.current.panStartX + dx;
          const ny = touchRef.current.panStartY + dy;
          panRef.current = { x: nx, y: ny };
          setPanX(nx); setPanY(ny);
        }
      }
    }
    function onEnd(e) {
      if (!touchRef.current) return;
      if (touchRef.current.type === 'pinch') {
        if (scaleRef.current <= 1) resetZoom();
        touchRef.current = null;
        return;
      }
      if (touchRef.current.type === 'swipe') {
        const dx = (e.changedTouches[0]?.clientX ?? 0) - touchRef.current.startX;
        const moved = touchRef.current.moved;
        touchRef.current = null;
        if (scaleRef.current <= 1 && moved && Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
      }
    }

    // scroll wheel zoom (เดสก์ท็อป) — ต้อง preventDefault กัน page scroll ตอนซูม จึงต้อง
    // แนบ listener แบบ native { passive:false } เอง (React แนบ onWheel เป็น passive โดย default)
    function onWheel(e) {
      e.preventDefault();
      const ns = Math.min(5, Math.max(1, scaleRef.current + (e.deltaY > 0 ? -0.25 : 0.25)));
      scaleRef.current = ns; setScale(ns);
      if (ns <= 1) { panRef.current = { x: 0, y: 0 }; setPanX(0); setPanY(0); }
    }

    el.addEventListener('touchstart', onStart, { passive: false });
    el.addEventListener('touchmove', onMove, { passive: false });
    el.addEventListener('touchend', onEnd, { passive: true });
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('touchstart', onStart);
      el.removeEventListener('touchmove', onMove);
      el.removeEventListener('touchend', onEnd);
      el.removeEventListener('wheel', onWheel);
    };
  }, [prev, next, resetZoom]);

  // ลากด้วยเมาส์ตอนขยาย (เดสก์ท็อป)
  function onMouseDown(e) {
    if (scaleRef.current <= 1) return;
    e.preventDefault();
    didDragRef.current = false;
    const startX = e.clientX - panRef.current.x;
    const startY = e.clientY - panRef.current.y;
    function onMove(e) {
      didDragRef.current = true;
      const nx = e.clientX - startX;
      const ny = e.clientY - startY;
      panRef.current = { x: nx, y: ny };
      setPanX(nx); setPanY(ny);
    }
    function onUp() {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }

  // คลิก/แตะที่จุดใดก็ได้บนรูป → ขยายเข้าตรงจุดนั้น (คลิกซ้ำเพื่อหด)
  function toggleZoomAt(e) {
    e.stopPropagation();
    if (didDragRef.current) { didDragRef.current = false; return; }
    if (scaleRef.current > 1) { resetZoom(); return; }
    const img = e.currentTarget;
    const rect = img.getBoundingClientRect();
    const cx = e.clientX - (rect.left + rect.width / 2);
    const cy = e.clientY - (rect.top + rect.height / 2);
    const targetScale = 2.2;
    const nx = -cx * (targetScale - 1);
    const ny = -cy * (targetScale - 1);
    scaleRef.current = targetScale;
    panRef.current = { x: nx, y: ny };
    setScale(targetScale); setPanX(nx); setPanY(ny);
  }

  const current = images[idx];

  return createPortal(
    <div
      id="lightboxOverlay"
      onClick={() => { if (scaleRef.current > 1) resetZoom(); else onClose(); }}
      style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(15,10,6,0.92)', display: 'flex', flexDirection: 'column' }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ flexShrink: 0, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px' }}>
        <span style={{ color: 'rgba(255,255,255,.6)', fontFamily: 'monospace', fontSize: 13 }}>{idx + 1} / {images.length}</span>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {zoomed && (
            <button onClick={(e) => { e.stopPropagation(); resetZoom(); }} style={{ ...iconBtnStyle, width: 'auto', padding: '0 12px', fontSize: 12, fontFamily: fonts.display }}>
              หดกลับ
            </button>
          )}
          <button onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="ปิด" style={iconBtnStyle}>×</button>
        </div>
      </div>

      <div
        ref={areaRef}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={onMouseDown}
        style={{
          flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', padding: '0 56px', overflow: 'hidden',
          cursor: zoomed ? 'grab' : 'zoom-in', touchAction: zoomed ? 'none' : 'manipulation',
        }}
      >
        <img
          key={idx}
          src={current.src}
          alt={current.alt || ''}
          onClick={toggleZoomAt}
          draggable={false}
          style={{
            maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: zoomed ? 0 : 8,
            userSelect: 'none',
            transform: `scale(${scale}) translate(${panX / scale}px, ${panY / scale}px)`,
            transition: scale === 1 ? 'transform .25s ease' : 'none',
            transformOrigin: 'center center',
          }}
        />
        {images.length > 1 && !zoomed && (
          <>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} style={arrowStyle('left')} aria-label="ก่อนหน้า">‹</button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} style={arrowStyle('right')} aria-label="ถัดไป">›</button>
          </>
        )}
      </div>

      {current.caption && !zoomed && (
        <div onClick={(e) => e.stopPropagation()} style={{ flexShrink: 0, textAlign: 'center', color: '#fff', fontFamily: fonts.display, padding: '4px 18px 18px', fontSize: 14 }}>
          {current.caption}
        </div>
      )}
    </div>,
    document.body
  );
}

const iconBtnStyle = {
  minWidth: 36, height: 36, borderRadius: 18, background: 'rgba(255,255,255,.12)',
  border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer', display: 'flex',
  alignItems: 'center', justifyContent: 'center', lineHeight: 1, padding: 0,
};

function arrowStyle(side) {
  return {
    position: 'absolute', [side]: 8, top: '50%', transform: 'translateY(-50%)',
    width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,.12)',
    border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1,
  };
}
