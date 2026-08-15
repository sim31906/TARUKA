import { useEffect, useState } from 'react';
import { colors } from '../styles/theme';

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function onScroll() {
      const de = document.documentElement;
      const max = de.scrollHeight - de.clientHeight;
      setPct(max > 0 ? (de.scrollTop / max) * 100 : 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed', top: 0, left: 0, height: 3, width: pct + '%', zIndex: 70,
        background: `linear-gradient(90deg, ${colors.orange}, ${colors.orangeDk})`,
        transition: 'width .12s linear',
        willChange: 'width',
      }}
    />
  );
}
