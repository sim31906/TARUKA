import { colors, fonts, radius, shadow } from '../styles/theme';
import { menu } from '../data/siteData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Menu() {
  const categories = menu.categories.filter((c) => c && c.image);
  if (categories.length === 0) return null;

  return (
    <section id="menu" className="section-trk" style={{ background: `linear-gradient(180deg, ${colors.cream}, #fff)` }}>
      <style>{`
        .mcat-card-trk { display: flex; flex-direction: column; background: #fff; border-radius: ${radius.lg}; overflow: hidden;
          box-shadow: ${shadow}; border: 2px solid ${colors.beige}; transition: transform .18s ease; }
        .mcat-card-trk:hover { transform: translateY(-6px) rotate(-1deg); }
        .mcat-item-trk + .mcat-item-trk { border-top: 1px solid rgba(201,165,124,.2); }
      `}</style>
      <div style={{ width: '100%', maxWidth: 1140, margin: '0 auto', padding: '0 22px' }}>
        <Reveal><SectionHeading title={menu.heading} subtitle={menu.body} /></Reveal>
        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))' }}>
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 70}>
              <div className="mcat-card-trk">
                <img
                  src={cat.image}
                  alt={cat.nameTh || cat.name}
                  loading="lazy"
                  style={{ display: 'block', width: '100%', aspectRatio: '1/1', objectFit: 'cover', background: colors.beigeSoft }}
                />
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
    </section>
  );
}
