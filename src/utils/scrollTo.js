// เลื่อนไปยัง section แบบ smooth โดยไม่เปลี่ยน URL (ไม่ติด #id ต่อท้าย address bar)
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function handleAnchorClick(e, id) {
  e.preventDefault();
  scrollToSection(id);
}
