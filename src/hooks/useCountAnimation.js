import { useCallback, useRef, useState } from 'react';

function parseNumText(text) {
  const s = String(text == null ? '' : text);
  const m = s.match(/^(\D*)([\d,]+)(.*)$/);
  if (!m) return null;
  return { prefix: m[1], suffix: m[3], value: parseInt(m[2].replace(/,/g, ''), 10) };
}

function reducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// นับเลขจากค่าเดิม → ค่าใหม่ คงตัวอักษรนำหน้า/ตามหลังไว้ (เช่น 19฿, 50+)
export function useCountAnimation(initialText) {
  const [display, setDisplay] = useState(initialText);
  const frame = useRef(null);

  const animateTo = useCallback((targetText, { duration = 600, from = '0' } = {}) => {
    const target = parseNumText(targetText);
    if (!target || reducedMotion()) { setDisplay(targetText); return; }
    const startParsed = parseNumText(from);
    const startValue = startParsed ? startParsed.value : 0;
    if (frame.current) cancelAnimationFrame(frame.current);
    let t0 = null;
    function tick(ts) {
      if (!t0) t0 = ts;
      const p = Math.min(1, (ts - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(startValue + (target.value - startValue) * eased);
      setDisplay(target.prefix + val.toLocaleString('en-US') + target.suffix);
      if (p < 1) { frame.current = requestAnimationFrame(tick); }
      else { setDisplay(targetText); }
    }
    frame.current = requestAnimationFrame(tick);
  }, []);

  return [display, animateTo];
}
