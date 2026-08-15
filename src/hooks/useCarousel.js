import { useCallback, useEffect, useRef, useState } from 'react';

// carousel (scroll-snap + arrows + dots + auto-advance) — จำนวน dot = "ตำแหน่งเลื่อนจริง"
// (วัดจากความกว้างจริง) ไม่ใช่จำนวนการ์ด เพราะการ์ดโชว์หลายใบพร้อมกัน
//
// loop ต่อเนื่อง: ผู้เรียกต้อง render รายการการ์ดซ้ำ 2 ชุดต่อกัน (ชุดจริง + ชุดโคลน) ใน track
// เดียวกัน — พอเลื่อนเข้าเขตชุดโคลน (ซึ่งพิกเซลเหมือนชุดจริงทุกประการ) จะสลับ scrollLeft
// กลับไปตำแหน่งเทียบเท่าในชุดจริงแบบ instant (ไม่ animate) ทำให้ loop มองไม่เห็นรอยต่อ
// ไม่มีอาการ "เลื่อนย้อนกลับ" ไปจุดเริ่มต้นแบบเดิม
//
// autoplay ไม่มี "หยุดถาวร" — ทุกการโต้ตอบ (ลาก/ปัด/กดปุ่มลูกศร-จุด/hover) แค่พักไว้ชั่วคราว
// แล้วเล่นต่อเองถ้าผู้ใช้ไม่ได้โต้ตอบซ้ำภายในเวลาสั้นๆ
export function useCarousel(itemCount, cardSelector = '.carousel-card-trk', autoplayMs = 4000) {
  const trackRef = useRef(null);
  const [dotCount, setDotCount] = useState(1);
  const [activeDot, setActiveDot] = useState(0);
  const timerRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 240;
    const card = track.querySelector(cardSelector);
    if (!card) return 240;
    const gap = parseInt(getComputedStyle(track).gap) || 16;
    return card.getBoundingClientRect().width + gap;
  }, [cardSelector]);

  // ความกว้างของชุด "จริง" 1 รอบ — track render ซ้ำ 2 ชุด จึงเท่ากับครึ่งหนึ่งของ scrollWidth
  const setWidth = useCallback(() => {
    const track = trackRef.current;
    return track ? track.scrollWidth / 2 : 0;
  }, []);

  const stops = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 1;
    const max = setWidth() - track.clientWidth;
    if (max <= 2) return 1;
    return Math.round(max / step()) + 1;
  }, [step, setWidth]);

  const currentIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const n = stops();
    const w = setWidth();
    const wrapped = w > 0 ? track.scrollLeft % w : track.scrollLeft;
    return Math.max(0, Math.min(n - 1, Math.round(wrapped / step())));
  }, [step, stops, setWidth]);

  // เลื่อนไปตำแหน่งจริง i (0..n-1) แบบ clamp — ใช้กับปุ่มย้อนกลับ/จุด (ไม่ loop)
  const scrollToIndex = useCallback((i) => {
    const track = trackRef.current;
    if (!track) return;
    const n = stops();
    const idx = Math.max(0, Math.min(n - 1, i));
    const max = setWidth() - track.clientWidth;
    track.scrollTo({ left: idx >= n - 1 ? max : idx * step(), behavior: 'smooth' });
  }, [step, stops, setWidth]);

  // เลื่อนต่อไปข้างหน้าทีละการ์ด ไม่สนใจว่าจะเกินชุดจริงหรือไม่ — ใช้กับ autoplay/ปุ่มถัดไป
  // เพื่อให้ loop ต่อเนื่องไปข้างหน้าเสมอ ไม่มีการเลื่อนย้อนกลับ
  const advance = useCallback(() => {
    const track = trackRef.current;
    if (!track || stops() <= 1) return;
    track.scrollTo({ left: track.scrollLeft + step(), behavior: 'smooth' });
  }, [step, stops]);

  const startTimer = useCallback(() => {
    if (timerRef.current) return;
    timerRef.current = setInterval(advance, autoplayMs);
  }, [advance, autoplayMs]);

  const pauseAuto = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  // พัก autoplay ไว้ก่อน แล้วนัดเล่นต่อเองถ้าผู้ใช้ไม่โต้ตอบซ้ำภายใน delay ms —
  // ใช้ทั้งกับ event บน track (ลาก/ปัด) และปุ่มลูกศร/จุดที่ผู้ใช้กดเอง ไม่มีการหยุดถาวรอีกต่อไป
  const pauseThenResume = useCallback((delay = autoplayMs) => {
    pauseAuto();
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(startTimer, delay);
  }, [pauseAuto, startTimer, autoplayMs]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function rebuild() {
      setDotCount(stops());
      setActiveDot(currentIndex());
    }
    rebuild();

    // รอให้ scroll (รวม animation ของ smooth-scroll) นิ่งก่อน ค่อยเช็คว่าเลื่อนเข้าเขตชุดโคลน
    // หรือยัง — กันไม่ให้การ set scrollLeft กลางคันไปขัดจังหวะ animation ที่กำลังเลื่อนอยู่
    let settleTimer;
    function checkWrap() {
      const w = setWidth();
      if (w > 0 && track.scrollLeft >= w - 1) track.scrollLeft -= w; // instant (ไม่มี behavior:smooth) เพราะเนื้อหาช่วงนั้นเหมือนกันทุกพิกเซล
    }
    function onScroll() {
      setActiveDot(currentIndex());
      clearTimeout(settleTimer);
      settleTimer = setTimeout(checkWrap, 160);
    }
    track.addEventListener('scroll', onScroll, { passive: true });

    let rt;
    const onResize = () => { clearTimeout(rt); rt = setTimeout(rebuild, 200); };
    window.addEventListener('resize', onResize);

    function onInteract() { pauseThenResume(); }
    // hover: พักไว้ตราบใดที่ยัง hover อยู่ (ไม่นัด resume จนกว่าจะออก) แล้วเล่นต่อไวตอนเมาส์ออก
    function onMouseEnter() { pauseAuto(); clearTimeout(resumeTimeoutRef.current); }
    function onMouseLeave() { clearTimeout(resumeTimeoutRef.current); resumeTimeoutRef.current = setTimeout(startTimer, 400); }
    // เลื่อนแนวตั้งของทั้งหน้าด้วยล้อเมาส์ผ่านตำแหน่ง carousel ไม่นับเป็นการโต้ตอบกับ carousel —
    // นับเฉพาะตอน delta แนวนอนเด่นชัด (ลาก touchpad ปัดซ้าย-ขวา) ว่าผู้ใช้ตั้งใจเลื่อน carousel เอง
    function onWheel(e) { if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) onInteract(); }

    startTimer();

    track.addEventListener('pointerdown', onInteract, { passive: true });
    track.addEventListener('touchstart', onInteract, { passive: true });
    track.addEventListener('wheel', onWheel, { passive: true });
    track.addEventListener('mouseenter', onMouseEnter, { passive: true });
    track.addEventListener('mouseleave', onMouseLeave, { passive: true });

    return () => {
      track.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      clearTimeout(rt);
      clearTimeout(settleTimer);
      clearTimeout(resumeTimeoutRef.current);
      pauseAuto();
      track.removeEventListener('pointerdown', onInteract);
      track.removeEventListener('touchstart', onInteract);
      track.removeEventListener('wheel', onWheel);
      track.removeEventListener('mouseenter', onMouseEnter);
      track.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [itemCount, stops, currentIndex, setWidth, startTimer, pauseAuto, pauseThenResume]);

  const prev = () => { pauseThenResume(); scrollToIndex(currentIndex() - 1); };
  const next = () => { pauseThenResume(); advance(); }; // ปุ่มถัดไปก็ loop ต่อเนื่องเหมือน autoplay ไม่เลื่อนย้อนกลับตอนถึงใบสุดท้าย
  const goTo = (i) => { pauseThenResume(); scrollToIndex(i); };

  return { trackRef, dotCount, activeDot, prev, next, goTo };
}
