import { useEffect, useRef } from 'react';
import { colors, fonts } from '../styles/theme';
import { useCountAnimation } from '../hooks/useCountAnimation';

export default function RoiRow({ label, value, isTotal }) {
  const [display, animateTo] = useCountAnimation(value);
  const firstRender = useRef(true);
  const lastValue = useRef(value);

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    animateTo(value, { duration: 520, from: lastValue.current });
    lastValue.current = value;
  }, [value, animateTo]);

  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16,
      padding: isTotal ? '16px 22px' : '13px 22px',
      borderBottom: isTotal ? 'none' : `1px solid ${colors.beigeSoft}`,
      background: isTotal ? colors.espresso : 'transparent',
    }}>
      <span style={{ color: isTotal ? '#fff' : colors.brownSoft, fontFamily: isTotal ? fonts.display : undefined, fontWeight: isTotal ? 500 : undefined, fontSize: 'clamp(13.5px,3.6vw,15px)' }}>
        {label}
      </span>
      <span style={{
        fontFamily: fonts.display, fontWeight: isTotal ? 600 : 500,
        color: isTotal ? colors.orange : colors.espresso,
        fontSize: isTotal ? 'clamp(20px,5vw,24px)' : 'clamp(14px,3.8vw,16px)',
        whiteSpace: 'nowrap',
      }}>
        {display}
      </span>
    </div>
  );
}
