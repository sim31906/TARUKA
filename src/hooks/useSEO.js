import { useEffect } from 'react';

const SITE_URL = 'https://taruka-th.com';

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (!el) return null;
  const prev = el.getAttribute(attr);
  el.setAttribute(attr, value);
  return prev;
}

// อัปเดต title/description/canonical/og ต่อหน้าใน SPA (react-router ไม่ทำให้อัตโนมัติ
// ทุกหน้าเลยแชร์ meta เดียวกันจาก index.html — ทำให้ Google index /menu, /branches
// ด้วย title/description ของหน้าแรก) แล้ว restore ค่าเดิมตอนออกจากหน้า
export default function useSEO({ title, description, path }) {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDescription = setMeta('meta[name="description"]', 'content', description);
    const prevCanonical = setMeta('link[rel="canonical"]', 'href', `${SITE_URL}${path}`);
    const prevOgTitle = setMeta('meta[property="og:title"]', 'content', title);
    const prevOgDescription = setMeta('meta[property="og:description"]', 'content', description);
    const prevOgUrl = setMeta('meta[property="og:url"]', 'content', `${SITE_URL}${path}`);

    document.title = title;

    return () => {
      document.title = prevTitle;
      if (prevDescription !== null) setMeta('meta[name="description"]', 'content', prevDescription);
      if (prevCanonical !== null) setMeta('link[rel="canonical"]', 'href', prevCanonical);
      if (prevOgTitle !== null) setMeta('meta[property="og:title"]', 'content', prevOgTitle);
      if (prevOgDescription !== null) setMeta('meta[property="og:description"]', 'content', prevOgDescription);
      if (prevOgUrl !== null) setMeta('meta[property="og:url"]', 'content', prevOgUrl);
    };
  }, [title, description, path]);
}
