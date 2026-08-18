import { useLayoutEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { colors, fonts, radius, shadow } from '../styles/theme';
import { brand, branchDirectory } from '../data/siteData';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

// สร้างลิงก์ค้นหาใน Google Maps จากชื่อสาขา+ที่ตั้ง+จังหวัด — ไม่ใช่พิกัดปักหมุดจริงของแต่ละสาขา
// (ไม่มี Place ID จริงให้ส่วนใหญ่) แต่พาไปหน้าค้นหาที่ตรงที่สุดเท่าที่ทำได้จากชื่อ/ที่อยู่
function mapsSearchUrl(branchName, location, provinceName) {
  const q = `TARUKA ${branchName} ${location} ${provinceName}`.replace(/\s+/g, ' ').trim();
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

export default function BranchesPage() {
  const navigate = useNavigate();
  const regions = branchDirectory.regions || [];
  const [activeRegion, setActiveRegion] = useState('ทั้งหมด');

  // react-router ไม่เลื่อนกลับขึ้นบนให้อัตโนมัติตอนเปลี่ยนหน้า — ระบุ behavior:'instant' ชัดเจน
  // ไม่งั้น CSS html{scroll-behavior:smooth} จะแทรกแทนให้เลื่อนแบบ animate (ดู MenuPage.jsx)
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const regionLabels = ['ทั้งหมด', ...regions.map((r) => r.name)];
  const visibleRegions = activeRegion === 'ทั้งหมด'
    ? regions
    : regions.filter((r) => r.name === activeRegion);

  const totalBranches = regions.reduce(
    (sum, r) => sum + r.provinces.reduce((s, p) => s + p.branches.length, 0),
    0
  );

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        .bp-back-trk { display: inline-flex; align-items: center; gap: 8px; font-family: ${fonts.display};
          font-weight: 500; font-size: clamp(13px,3.4vw,14.5px); color: ${colors.brownSoft}; background: none;
          border: none; cursor: pointer; padding: 0; transition: color .2s; }
        .bp-back-trk:hover { color: ${colors.orangeDk}; }
        .bp-tab-trk { font-family: ${fonts.display}; font-weight: 500; font-size: clamp(13px,3.4vw,14.5px); line-height: 1;
          min-height: 38px; padding: 0 18px; border: 2px solid ${colors.beige}; background: #fff; color: ${colors.brownSoft};
          border-radius: 999px; cursor: pointer; transition: transform .12s, background .2s, border-color .2s, color .2s, box-shadow .2s; }
        .bp-tab-trk:hover { border-color: ${colors.orange}; transform: translateY(-1px); }
        .bp-tab-trk.active { background: ${colors.orange}; border-color: ${colors.orangeDk}; color: #fff;
          font-weight: 600; box-shadow: 0 8px 18px rgba(242,145,61,.38); }
        .bp-tab-trk:focus-visible { outline: 3px solid rgba(242,145,61,.45); outline-offset: 2px; }
        .bp-branch-card-trk { background: #fff; border-radius: ${radius.sm}; border: 2px solid ${colors.beige};
          padding: 14px 18px; transition: transform .15s ease, border-color .2s ease; }
        .bp-branch-card-trk:hover { transform: translateY(-3px); border-color: ${colors.orange}; }
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
            <button className="bp-back-trk" onClick={() => navigate('/', { state: { scrollTo: 'branches' } })}>
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
                สาขาทั่วประเทศ
              </h1>
              <div style={{ width: 58, height: 6, borderRadius: 6, background: colors.orange, margin: '24px auto 0' }} />
              <p style={{
                textAlign: 'center', color: colors.brownSoft, maxWidth: 680, margin: '10px auto 8px',
                fontSize: 'clamp(15px,4vw,17px)',
              }}>
                ยืนยันได้แล้ว {totalBranches} สาขา ใน {regions.reduce((s, r) => s + r.provinces.length, 0)} จังหวัด
              </p>
              <p style={{
                textAlign: 'center', color: colors.brownSoft, maxWidth: 680, margin: '0 auto 34px',
                fontSize: 'clamp(12.5px,3.4vw,13.5px)', opacity: 0.8,
              }}>
                {branchDirectory.note} (ข้อมูล ณ {branchDirectory.updatedAt})
              </p>
            </Reveal>

            <Reveal>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 40 }}>
                {regionLabels.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`bp-tab-trk${activeRegion === label ? ' active' : ''}`}
                    onClick={() => setActiveRegion(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </Reveal>

            {visibleRegions.map((region) => (
              <div key={region.name} style={{ marginBottom: 44 }}>
                <Reveal>
                  <h2 style={{
                    fontFamily: fonts.display, fontWeight: 700, fontSize: 'clamp(20px,4.5vw,26px)',
                    color: colors.orangeDk, marginBottom: 20,
                  }}>
                    {region.name}
                  </h2>
                </Reveal>
                {region.provinces.map((province, pi) => (
                  <Reveal key={province.name} delay={pi * 60}>
                    <div style={{ marginBottom: 26 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 12 }}>
                        <h3 style={{ fontFamily: fonts.display, fontWeight: 600, fontSize: 'clamp(16px,4vw,19px)', color: colors.espresso }}>
                          จังหวัด{province.name}
                        </h3>
                        <span style={{ fontSize: 'clamp(12.5px,3.4vw,13.5px)', color: colors.brownSoft }}>
                          ({province.count})
                        </span>
                      </div>
                      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
                        {province.branches.map((b) => (
                          <div key={b.name} className="bp-branch-card-trk">
                            <div style={{ fontFamily: fonts.display, fontWeight: 600, fontSize: 'clamp(14px,3.6vw,15px)', color: colors.espresso, marginBottom: 4 }}>
                              {b.name}
                            </div>
                            <div style={{ fontSize: 'clamp(12.5px,3.4vw,13.5px)', color: colors.brownSoft, lineHeight: 1.5 }}>
                              {b.location}
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', marginTop: 6 }}>
                              <a
                                href={mapsSearchUrl(b.name, b.location, province.name)}
                                target="_blank"
                                rel="noopener"
                                style={{
                                  fontFamily: fonts.display, fontWeight: 500,
                                  fontSize: 'clamp(12.5px,3.4vw,13.5px)', color: colors.orangeDk, textDecoration: 'none',
                                }}
                              >
                                📍 Google Maps
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
