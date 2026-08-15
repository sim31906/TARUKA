import { colors, radius, shadow } from '../styles/theme';
import { branches } from '../data/siteData';
import { useCarousel } from '../hooks/useCarousel';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Branches() {
  const images = (branches.images || []).filter(Boolean);
  const { trackRef, dotCount, activeDot, prev, next, goTo } = useCarousel(images.length, '.carousel-card-trk', 7000);

  if (images.length === 0) return null;

  return (
    <section id="branches" className="section-trk" style={{ background: `linear-gradient(180deg, ${colors.cream}, #fff)` }}>
      <style>{`
        .menu-track-trk { display: flex; gap: 16px; overflow-x: auto; scroll-snap-type: x proximity; scroll-behavior: smooth;
          padding: 8px 2px 18px; }
        .carousel-card-trk { flex: 0 0 auto; width: calc((100% - 32px)/3); scroll-snap-align: start; border-radius: ${radius.lg};
          overflow: hidden; box-shadow: ${shadow}; border: 2px solid ${colors.beige}; background: #fff; }
        @media (max-width: 860px) { .carousel-card-trk { width: calc((100% - 16px)/2); } }
        @media (max-width: 560px) { .carousel-card-trk { width: 100%; } }
        .carousel-arrow-trk { position: absolute; top: 42%; transform: translateY(-50%); width: 48px; height: 48px;
          border-radius: 50%; border: none; cursor: pointer; background: ${colors.orange}; color: #fff; font-size: 26px;
          line-height: 1; box-shadow: 0 8px 20px rgba(242,145,61,.4); z-index: 5;
          display: flex; align-items: center; justify-content: center; padding: 0; transition: transform .15s, background .2s; }
        .carousel-arrow-trk.prev { left: -8px; } .carousel-arrow-trk.next { right: -8px; }
        .carousel-arrow-trk:hover { background: ${colors.orangeDk}; transform: translateY(-50%) scale(1.08); }
        .carousel-dots-trk { display: flex; gap: 2px; justify-content: center; margin-top: 6px; }
        .carousel-dot-trk { width: 24px; height: 24px; border: none; padding: 0; background: transparent; cursor: pointer;
          display: grid; place-items: center; }
        .carousel-dot-trk::before { content: ""; width: 9px; height: 9px; border-radius: 50%; background: ${colors.beige};
          opacity: .7; transition: transform .2s, background .2s, opacity .2s; }
        .carousel-dot-trk.active::before { background: ${colors.orange}; opacity: 1; transform: scale(1.35); }
        .carousel-dot-trk:focus-visible { outline: 2px solid ${colors.orange}; outline-offset: 0; border-radius: 50%; }
        @media (max-width: 720px) { .carousel-arrow-trk { display: none; } }
      `}</style>
      <div style={{ width: '100%', maxWidth: 1140, margin: '0 auto', padding: '0 22px' }}>
        <Reveal><SectionHeading title={branches.heading} subtitle={branches.body} /></Reveal>
        <div style={{ position: 'relative' }}>
          <button className="carousel-arrow-trk prev" type="button" aria-label="ก่อนหน้า" onClick={prev}>‹</button>
          <div ref={trackRef} className="menu-track-trk no-scrollbar">
            {images.map((url, i) => (
              <div key={url} className="carousel-card-trk">
                <img
                  src={url}
                  alt={(branches.heading || 'TARUKA') + ' ' + (i + 1)}
                  loading="lazy"
                  style={{ display: 'block', width: '100%', aspectRatio: '1/1', objectFit: 'cover', background: colors.beigeSoft }}
                />
              </div>
            ))}
          </div>
          <button className="carousel-arrow-trk next" type="button" aria-label="ถัดไป" onClick={next}>›</button>
        </div>
        {dotCount > 1 && (
          <div className="carousel-dots-trk">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel-dot-trk${i === activeDot ? ' active' : ''}`}
                aria-label={`ไปสไลด์ที่ ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
