import { useEffect } from 'react';
import { GA_MEASUREMENT_ID } from '../data/siteData';

// GA4 + นับคลิกปุ่มสำคัญ — ถ้า GA_MEASUREMENT_ID ว่างไว้ ระบบจะไม่ทำงาน (ปลอดภัย)
export default function Analytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    if (/^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID)) {
      const s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
      document.head.appendChild(s);
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID);
    }

    function track(action, params) { try { window.gtag('event', action, params || {}); } catch (e) {} }
    function capOf(a, sel) { const s = a.querySelector(sel); return s ? (s.textContent || '').trim() : ''; }

    function onClick(e) {
      const a = e.target && e.target.closest ? e.target.closest('a,button') : null;
      if (!a) return;
      if (a.closest('#contactChannels')) track('contact_click', { channel: capOf(a, '.channel-cap'), source: 'section' });
      else if (a.closest('#fabItems')) track('contact_click', { channel: capOf(a, '.fab-label'), source: 'fab' });
      else if (a.id === 'heroCta' || a.id === 'headerCta') track('cta_click', { location: a.id === 'heroCta' ? 'hero' : 'header' });
      else if (a.closest('#navMenu')) track('nav_click', { section: a.getAttribute('href') });
      else if (a.classList.contains('roi-tab')) track('roi_scenario', { value: (a.textContent || '').trim() });
      else if (a.id === 'fabMain') track('fab_toggle', {});
      else if (a.getAttribute('href') === '#menu') track('view_menu_click', {});
    }
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
