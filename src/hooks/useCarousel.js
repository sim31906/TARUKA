import { useCallback, useEffect, useRef, useState } from 'react';

// carousel (scroll-snap + arrows + dots + auto-advance) — จำนวน dot = "ตำแหน่งเลื่อนจริง"
// (วัดจากความกว้างจริง) ไม่ใช่จำนวนการ์ด เพราะการ์ดโชว์หลายใบพร้อมกัน
export function useCarousel(itemCount, cardSelector = '.carousel-card-trk', autoplayMs = 4000) {
  const trackRef = useRef(null);
  const [dotCount, setDotCount] = useState(1);
  const [activeDot, setActiveDot] = useState(0);
  const timerRef = useRef(null);
  const userStoppedRef = useRef(false); // true เฉพาะตอนผู้ใช้ตั้งใจโต้ตอบจริง (ลาก/ปัด/กดปุ่ม) ไม่ใช่แค่เมาส์ผ่าน

  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 240;
    const card = track.querySelector(cardSelector);
    if (!card) return 240;
    const gap = parseInt(getComputedStyle(track).gap) || 16;
    return card.getBoundingClientRect().width + gap;
  }, [cardSelector]);

  const stops = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 1;
    const max = track.scrollWidth - track.clientWidth;
    if (max <= 2) return 1;
    return Math.round(max / step()) + 1;
  }, [step]);

  const currentIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const n = stops();
    return Math.max(0, Math.min(n - 1, Math.round(track.scrollLeft / step())));
  }, [step, stops]);

  const scrollToIndex = useCallback((i) => {
    const track = trackRef.current;
    if (!track) return;
    const n = stops();
    const idx = Math.max(0, Math.min(n - 1, i));
    const max = track.scrollWidth - track.clientWidth;
    track.scrollTo({ left: idx >= n - 1 ? max : idx * step(), behavior: 'smooth' });
  }, [step, stops]);

  // หยุดถาวรสำหรับ session นี้ — ใช้ตอนผู้ใช้ตั้งใจโต้ตอบ (ลาก/ปัด/กดปุ่มลูกศร-จุด)
  const stopAuto = useCallback(() => {
    userStoppedRef.current = true;
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function rebuild() {
      setDotCount(stops());
      setActiveDot(currentIndex());
    }
    rebuild();

    const onScroll = () => setActiveDot(currentIndex());
    track.addEventListener('scroll', onScroll, { passive: true });

    let rt;
    const onResize = () => { clearTimeout(rt); rt = setTimeout(rebuild, 200); };
    window.addEventListener('resize', onResize);

    function startTimer() {
      if (timerRef.current) return;
      timerRef.current = setInterval(() => {
        const n = stops();
        if (n <= 1) return;
        const idx = currentIndex();
        scrollToIndex(idx >= n - 1 ? 0 : idx + 1);
      }, autoplayMs);
    }
    // พัก autoplay ชั่วคราว (เมาส์ผ่าน) — ไม่ใช่การตั้งใจโต้ตอบ จึงกลับมาเล่นต่อได้ตอนเมาส์ออก
    function pauseAuto() {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    }
    function resumeAuto() {
      if (!userStoppedRef.current) startTimer();
    }
    // เลื่อนแนวตั้งของทั้งหน้าด้วยล้อเมาส์ผ่านตำแหน่ง carousel ไม่นับเป็นการโต้ตอบกับ carousel —
    // นับเฉพาะตอน delta แนวนอนเด่นชัด (ลาก touchpad ปัดซ้าย-ขวา) ว่าผู้ใช้ตั้งใจเลื่อน carousel เอง
    function onWheel(e) {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) stopAuto();
    }

    startTimer();

    track.addEventListener('pointerdown', stopAuto, { passive: true });
    track.addEventListener('touchstart', stopAuto, { passive: true });
    track.addEventListener('wheel', onWheel, { passive: true });
    track.addEventListener('mouseenter', pauseAuto, { passive: true });
    track.addEventListener('mouseleave', resumeAuto, { passive: true });

    return () => {
      track.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      clearTimeout(rt);
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
      track.removeEventListener('pointerdown', stopAuto);
      track.removeEventListener('touchstart', stopAuto);
      track.removeEventListener('wheel', onWheel);
      track.removeEventListener('mouseenter', pauseAuto);
      track.removeEventListener('mouseleave', resumeAuto);
    };
  }, [itemCount, stops, currentIndex, scrollToIndex, stopAuto, autoplayMs]);

  const prev = () => { stopAuto(); scrollToIndex(currentIndex() - 1); };
  const next = () => { stopAuto(); const idx = currentIndex(); scrollToIndex(idx >= stops() - 1 ? 0 : idx + 1); };
  const goTo = (i) => { stopAuto(); scrollToIndex(i); };

  return { trackRef, dotCount, activeDot, prev, next, goTo };
}
