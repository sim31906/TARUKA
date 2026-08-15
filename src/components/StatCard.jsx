import { useEffect, useRef } from 'react';
import { colors, fonts, radius } from '../styles/theme';
import { useCountAnimation } from '../hooks/useCountAnimation';

export default function StatCard({ value, label }) {
  const ref = useRef(null);
  const [display, animateTo] = useCountAnimation(value);
  const done = useRef(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          animateTo(value, { duration: 1100 });
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, animateTo]);

  return (
    <div style={{
      background: '#fff', borderRadius: radius.lg, padding: '30px 18px', textAlign: 'center',
      border: `2px solid ${colors.beige}`, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -22, right: -22, width: 72, height: 72, borderRadius: '50%', background: colors.cream }} />
      <div ref={ref} style={{
        fontFamily: fonts.display, fontWeight: 600, fontSize: 'clamp(32px,9vw,46px)', color: colors.orange,
        position: 'relative', lineHeight: 1,
      }}>
        {display}
      </div>
      <div style={{ fontSize: 'clamp(13.5px,3.6vw,15px)', color: colors.brownSoft, position: 'relative', marginTop: 6, whiteSpace: 'pre-line' }}>
        {label}
      </div>
    </div>
  );
}
