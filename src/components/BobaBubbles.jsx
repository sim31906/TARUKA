import { useMemo } from 'react';

// ลูกเล่น: ฟองไข่มุกลอยในพื้นหลัง section ติดต่อ (เคารพ prefers-reduced-motion)
export default function BobaBubbles() {
  const reduced = typeof window !== 'undefined' && window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const bubbles = useMemo(() => {
    if (reduced) return [];
    return Array.from({ length: 12 }).map(() => ({
      size: 8 + Math.round(Math.random() * 20),
      left: Math.round(Math.random() * 96),
      dur: (7 + Math.random() * 8).toFixed(1),
      delay: (Math.random() * 9).toFixed(1),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (reduced) return null;

  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {bubbles.map((b, i) => (
        <span
          key={i}
          style={{
            position: 'absolute', bottom: -32, left: b.left + '%',
            width: b.size, height: b.size, borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 30%, rgba(255,247,236,.30), rgba(242,145,61,.16))',
            animationName: 'bobaRise', animationDuration: b.dur + 's', animationDelay: '-' + b.delay + 's',
            animationTimingFunction: 'linear', animationIterationCount: 'infinite',
          }}
        />
      ))}
    </div>
  );
}
