import { colors } from '../styles/theme';

// ลูกเล่น: ไข่มุกเด้งกระจายตอนกดปุ่ม CTA (เคารพ prefers-reduced-motion)
export function triggerBobaSpark(x, y) {
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;
  for (let i = 0; i < 8; i++) {
    const ang = (Math.PI * 2 * i) / 8 + (Math.random() * 0.5 - 0.25);
    const dist = 34 + Math.random() * 46;
    const dx = (Math.cos(ang) * dist).toFixed(1) + 'px';
    const dy = (Math.sin(ang) * dist - 18).toFixed(1) + 'px';
    const s = document.createElement('span');
    s.style.cssText =
      'position:fixed;left:' + x + 'px;top:' + y + 'px;width:13px;height:13px;border-radius:50%;' +
      'background:' + colors.boba + ';box-shadow:inset -2px -2px 4px rgba(255,255,255,.28);' +
      'pointer-events:none;z-index:90;transform:translate(-50%,-50%);' +
      'animation:bobaSpark .62s cubic-bezier(.22,1,.36,1) forwards;';
    s.style.setProperty('--dx', dx);
    s.style.setProperty('--dy', dy);
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 660);
  }
}
