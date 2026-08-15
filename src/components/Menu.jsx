import { useState } from 'react';
import { colors, fonts, radius, shadow } from '../styles/theme';
import { menu } from '../data/siteData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Lightbox from './Lightbox';

export default function Menu() {
  const categories = menu.categories.filter((c) => c && c.image);
  const [lightboxIdx, setLightboxIdx] = useState(null);

  if (categories.length === 0) return null;

  const lightboxImages = categories.map((cat) => ({
    src: cat.image,
    alt: cat.nameTh || cat.name,
    caption: cat.nameTh ? `${cat.nameTh} · ${cat.name}` : cat.name,
  }));

  return (
    <section id="menu" className="section-trk" style={{ background: `linear-gradient(180deg, ${colors.cream}, #fff)` }}>
      <style>{`
        .mcat-card-trk { display: flex; flex-direction: column; background: #fff; border-radius: ${radius.lg}; overflow: hidden;
          box-shadow: ${shadow}; border: 2px solid ${colors.beige}; transition: transform .18s ease; }
        .mcat-card-trk:hover { transform: translateY(-6px) rotate(-1deg); }
        .mcat-item-trk + .mcat-item-trk { border-top: 1px solid rgba(201,165,124,.2); }
        .mcat-img-wrap-trk { position: relative; cursor: zoom-in; }
        .mcat-img-zoom-trk { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          background: rgba(42,27,18,0); opacity: 0; transition: opacity .2s ease, background .2s ease; }
        .mcat-img-wrap-trk:hover .mcat-img-zoom-trk { opacity: 1; background: rgba(42,27,18,.28); }
        .mcat-img-zoom-trk svg { filter: drop-shadow(0 2px 6px rgba(0,0,0,.35)); }
      `}</style>
      <div style={{ width: '100%', maxWidth: 1140, margin: '0 auto', padding: '0 22px' }}>
        <Reveal><SectionHeading title={menu.heading} subtitle={menu.body} /></Reveal>
        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))' }}>
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 70}>
              <div className="mcat-card-trk">
                <button
                  type="button"
                  className="mcat-img-wrap-trk"
                  onClick={() => setLightboxIdx(i)}
                  aria-label={`ดูรูป ${cat.nameTh || cat.name} แบบเต็ม`}
                  style={{ border: 'none', padding: 0, background: 'none', display: 'block', width: '100%' }}
                >
                  <img
                    src={cat.image}
                    alt={cat.nameTh || cat.name}
                    loading="lazy"
                    style={{ display: 'block', width: '100%', aspectRatio: '1/1', objectFit: 'cover', background: colors.beigeSoft }}
                  />
                  <span className="mcat-img-zoom-trk" aria-hidden="true">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </span>
                </button>
                <div style={{ padding: '16px 20px 20px' }}>
                  {cat.nameTh && (
                    <span style={{
                      display: 'inline-block', fontFamily: fonts.display, fontSize: 'clamp(11px,2.9vw,12px)',
                      fontWeight: 500, letterSpacing: '.3px', color: '#fff', background: colors.orange,
                      padding: '4px 14px', borderRadius: 999, marginBottom: 13,
                    }}>
                      {cat.nameTh}
                    </span>
                  )}
                  <ul>
                    {(cat.items || []).map((it) => (
                      <li key={it.name} className="mcat-item-trk" style={{ display: 'flex', alignItems: 'baseline', gap: 6, padding: '6px 0' }}>
                        <span style={{ color: colors.brownSoft, fontSize: 'clamp(13px,3.5vw,14.5px)', whiteSpace: 'pre-line' }}>
                          {it.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {lightboxIdx !== null && (
        <Lightbox images={lightboxImages} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}
    </section>
  );
}
