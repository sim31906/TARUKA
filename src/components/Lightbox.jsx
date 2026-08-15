import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { fonts } from '../styles/theme';

// ป็อปอัพดูรูปเต็ม — คลิกรูปเพื่อขยาย/หด (zoom toggle), ลูกศร/ปัด/ลูกศรคีย์บอร์ดเพื่อเลื่อนดูรูปถัดไป
export default function Lightbox({ images, startIndex = 0, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const [zoomed, setZoomed] = useState(false);

  const idxRef = useRef(idx); idxRef.current = idx;
  const lenRef = useRef(images.length); lenRef.current = images.length;

  const goTo = useCallback((i) => { setZoomed(false); setIdx(i); }, []);
  const prev = useCallback(() => goTo((idxRef.current - 1 + lenRef.current) % lenRef.current), [goTo]);
  const next = useCallback(() => goTo((idxRef.current + 1) % lenRef.current), [goTo]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    }
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  const current = images[idx];

  return createPortal(
    <div
      id="lightboxOverlay"
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(15,10,6,0.92)', display: 'flex', flexDirection: 'column' }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ flexShrink: 0, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px' }}>
        <span style={{ color: 'rgba(255,255,255,.6)', fontFamily: 'monospace', fontSize: 13 }}>{idx + 1} / {images.length}</span>
        <button onClick={onClose} aria-label="ปิด" style={iconBtnStyle}>×</button>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '0 56px', overflow: 'hidden' }}
      >
        <img
          key={idx}
          src={current.src}
          alt={current.alt || ''}
          onClick={() => setZoomed((z) => !z)}
          draggable={false}
          style={{
            maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 8,
            cursor: zoomed ? 'zoom-out' : 'zoom-in', userSelect: 'none',
            transform: zoomed ? 'scale(1.7)' : 'scale(1)',
            transition: 'transform .25s ease',
          }}
        />
        {images.length > 1 && (
          <>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} style={arrowStyle('left')} aria-label="ก่อนหน้า">‹</button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} style={arrowStyle('right')} aria-label="ถัดไป">›</button>
          </>
        )}
      </div>

      {current.caption && (
        <div onClick={(e) => e.stopPropagation()} style={{ flexShrink: 0, textAlign: 'center', color: '#fff', fontFamily: fonts.display, padding: '4px 18px 18px', fontSize: 14 }}>
          {current.caption}
        </div>
      )}
    </div>,
    document.body
  );
}

const iconBtnStyle = {
  width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,.12)',
  border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer', display: 'flex',
  alignItems: 'center', justifyContent: 'center', lineHeight: 1,
};

function arrowStyle(side) {
  return {
    position: 'absolute', [side]: 8, top: '50%', transform: 'translateY(-50%)',
    width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,.12)',
    border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1,
  };
}
