import { useLayoutEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { colors, fonts, radius, shadow } from '../styles/theme';
import { brand, menu } from '../data/siteData';
import Lightbox from '../components/Lightbox';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import useSEO from '../hooks/useSEO';

export default function MenuPage() {
  const navigate = useNavigate();
  useSEO({
    title: 'เมนู TARUKA กว่า 50 เมนู เริ่มต้นเพียง 19฿/แก้ว | TARUKA Thailand',
    description: 'รวมเมนูชานมไข่มุกและชาไต้หวัน TARUKA กว่า 50 เมนู แบ่งเป็นคอลเลกชันตามมู้ด เริ่มต้นเพียง 19 บาท/แก้ว ดูเมนูทั้งหมดก่อนตัดสินใจเปิดแฟรนไชส์',
    path: '/menu',
  });
  const categories = menu.categories.filter((c) => c && c.image);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [activeCat, setActiveCat] = useState('ทั้งหมด');

  // react-router ไม่เลื่อนกลับขึ้นบนให้อัตโนมัติตอนเปลี่ยนหน้า — คงตำแหน่ง scroll เดิม
  // จากหน้าแรกไว้ ทำให้ดูเหมือนเปิดมาแล้วอยู่ล่างสุด ต้องสั่งเลื่อนขึ้นบนเองตอน mount
  // ระบุ behavior:'instant' ชัดเจน ไม่งั้น CSS html{scroll-behavior:smooth} จะแทรกแทนให้เลื่อนแบบ animate
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const catLabels = ['ทั้งหมด', ...new Set(categories.map((c) => c.nameTh || c.name))];
  const visibleCategories = activeCat === 'ทั้งหมด'
    ? categories
    : categories.filter((c) => (c.nameTh || c.name) === activeCat);

  const lightboxImages = categories.map((cat) => ({
    src: cat.image,
    alt: cat.nameTh || cat.name,
    caption: cat.nameTh ? `${cat.nameTh} · ${cat.name}` : cat.name,
  }));

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        .menupage-back-trk { display: inline-flex; align-items: center; gap: 8px; font-family: ${fonts.display};
          font-weight: 500; font-size: clamp(13px,3.4vw,14.5px); color: ${colors.brownSoft}; background: none;
          border: none; cursor: pointer; padding: 0; transition: color .2s; }
        .menupage-back-trk:hover { color: ${colors.orangeDk}; }
        .mp-tab-trk { font-family: ${fonts.display}; font-weight: 500; font-size: clamp(13px,3.4vw,14.5px); line-height: 1;
          min-height: 38px; padding: 0 18px; border: 2px solid ${colors.beige}; background: #fff; color: ${colors.brownSoft};
          border-radius: 999px; cursor: pointer; transition: transform .12s, background .2s, border-color .2s, color .2s, box-shadow .2s; }
        .mp-tab-trk:hover { border-color: ${colors.orange}; transform: translateY(-1px); }
        .mp-tab-trk.active { background: ${colors.orange}; border-color: ${colors.orangeDk}; color: #fff;
          font-weight: 600; box-shadow: 0 8px 18px rgba(242,145,61,.38); }
        .mp-tab-trk:focus-visible { outline: 3px solid rgba(242,145,61,.45); outline-offset: 2px; }
        .mp-card-trk { display: flex; flex-direction: column; background: #fff; border-radius: ${radius.lg}; overflow: hidden;
          box-shadow: ${shadow}; border: 2px solid ${colors.beige}; transition: transform .18s ease; }
        .mp-card-trk:hover { transform: translateY(-6px) scale(1.03); }
        .mp-item-trk + .mp-item-trk { border-top: 1px solid rgba(201,165,124,.2); }
        .mp-img-wrap-trk { position: relative; cursor: zoom-in; display: block; width: 100%; border: none; padding: 0; background: none; }
        .mp-img-zoom-trk { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          background: rgba(42,27,18,0); opacity: 0; transition: opacity .2s ease, background .2s ease; }
        .mp-img-wrap-trk:hover .mp-img-zoom-trk { opacity: 1; background: rgba(42,27,18,.28); }
        .mp-img-zoom-trk svg { filter: drop-shadow(0 2px 6px rgba(0,0,0,.35)); }
      `}</style>

      <div style={{ minHeight: '100vh', background: colors.cream }}>
        <header style={{
          position: 'sticky', top: 0, zIndex: 20, background: 'rgba(255,247,236,.9)',
          backdropFilter: 'blur(10px)', borderBottom: `1px solid ${colors.beige}`,
        }}>
          <div style={{
            width: '100%', maxWidth: 1140, margin: '0 auto', padding: '0 22px', height: 74,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
              {brand.logoUrl && <img src={brand.logoUrl} alt={brand.name} style={{ height: 38, width: 'auto' }} />}
              <span style={{ fontFamily: fonts.display, fontSize: 'clamp(18px,4.5vw,21px)', fontWeight: 700, letterSpacing: '.04em', color: colors.espresso }}>
                {brand.name}
              </span>
            </Link>
            <button className="menupage-back-trk" onClick={() => navigate('/', { state: { scrollTo: 'menu' } })}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
              </svg>
              กลับหน้าหลัก
            </button>
          </div>
        </header>

        <main style={{ padding: '56px 0 80px' }}>
          <div style={{ width: '100%', maxWidth: 1140, margin: '0 auto', padding: '0 22px' }}>
            <Reveal>
              <h1 style={{
                fontFamily: fonts.display, fontWeight: 700, fontSize: 'clamp(32px,6vw,50px)',
                textAlign: 'center', color: colors.espresso, lineHeight: 1.15,
              }}>
                เมนูทั้งหมดของเรา
              </h1>
              <div style={{ width: 58, height: 6, borderRadius: 6, background: colors.orange, margin: '24px auto 0' }} />
              <p style={{
                textAlign: 'center', color: colors.brownSoft, maxWidth: 640, margin: '10px auto 34px',
                fontSize: 'clamp(15px,4vw,17px)',
              }}>
                {menu.body} — รวมทุกคอลเลกชันไว้ในหน้าเดียว
              </p>
            </Reveal>

            <Reveal>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 30 }}>
                {catLabels.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`mp-tab-trk${activeCat === label ? ' active' : ''}`}
                    onClick={() => setActiveCat(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </Reveal>

            <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))' }}>
              {visibleCategories.map((cat, i) => (
                <Reveal key={cat.name} delay={i * 70}>
                  <div className="mp-card-trk">
                    <button
                      type="button"
                      className="mp-img-wrap-trk"
                      onClick={() => setLightboxIdx(categories.indexOf(cat))}
                      aria-label={`ดูรูป ${cat.nameTh || cat.name} แบบเต็ม`}
                    >
                      <img
                        src={cat.image}
                        alt={cat.nameTh || cat.name}
                        loading="lazy"
                        style={{ display: 'block', width: '100%', aspectRatio: '1/1', objectFit: 'cover', background: colors.beigeSoft }}
                      />
                      <span className="mp-img-zoom-trk" aria-hidden="true">
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
                          <li key={it.name} className="mp-item-trk" style={{ display: 'flex', alignItems: 'baseline', gap: 6, padding: '6px 0' }}>
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
        </main>

        <Footer />
      </div>

      {lightboxIdx !== null && (
        <Lightbox images={lightboxImages} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}
    </>
  );
}
