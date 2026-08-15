import { useCallback, useEffect, useRef, useState } from 'react';

// carousel (scroll-snap + arrows + dots + auto-advance) — จำนวน dot = "ตำแหน่งเลื่อนจริง"
// (วัดจากความกว้างจริง) ไม่ใช่จำนวนการ์ด เพราะการ์ดโชว์หลายใบพร้อมกัน
export function useCarousel(itemCount, cardSelector = '.carousel-card-trk') {
  const trackRef = useRef(null);
  const [dotCount, setDotCount] = useState(1);
  const [activeDot, setActiveDot] = useState(0);
  const timerRef = useRef(null);

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

  const stopAuto = useCallback(() => {
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

    timerRef.current = setInterval(() => {
      const n = stops();
      if (n <= 1) return;
      const idx = currentIndex();
      scrollToIndex(idx >= n - 1 ? 0 : idx + 1);
    }, 4000);

    const stopEvents = ['pointerdown', 'touchstart', 'mouseenter', 'wheel'];
    stopEvents.forEach((ev) => track.addEventListener(ev, stopAuto, { passive: true }));

    return () => {
      track.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      clearTimeout(rt);
      stopAuto();
      stopEvents.forEach((ev) => track.removeEventListener(ev, stopAuto));
    };
  }, [itemCount, stops, currentIndex, scrollToIndex, stopAuto]);

  const prev = () => { stopAuto(); scrollToIndex(currentIndex() - 1); };
  const next = () => { stopAuto(); const idx = currentIndex(); scrollToIndex(idx >= stops() - 1 ? 0 : idx + 1); };
  const goTo = (i) => { stopAuto(); scrollToIndex(i); };

  return { trackRef, dotCount, activeDot, prev, next, goTo };
}
