import { useEffect, useState } from 'react';
import { colors, fonts } from '../styles/theme';
import { brand, navItems } from '../data/siteData';
import { handleAnchorClick } from '../utils/scrollTo';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 10); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') setOpen(false); }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <style>{`
        .header-trk { position: sticky; top: 0; z-index: 50; background: rgba(255,247,236,.85); backdrop-filter: blur(10px);
          transition: box-shadow .25s ease, background .25s ease; }
        .header-trk.scrolled { box-shadow: 0 6px 22px rgba(42,27,18,.10); }
        .nav-trk { display: flex; align-items: center; justify-content: space-between; height: 74px; width: 100%; max-width: 1140px; margin: 0 auto; padding: 0 22px; }
        .brand-trk { display: flex; align-items: center; gap: 11px; text-decoration: none; }
        .header-cta-trk { position: relative; overflow: hidden; display: inline-flex; align-items: center; gap: 8px; border: none; cursor: pointer;
          text-decoration: none; background: ${colors.orange}; color: #fff; font-family: ${fonts.display}; font-weight: 500;
          font-size: clamp(12.5px,3.4vw,14px); padding: 10px 20px; border-radius: 999px; box-shadow: 0 8px 20px rgba(242,145,61,.38);
          transition: transform .15s, background .2s; }
        .header-cta-trk:hover { transform: translateY(-2px) scale(1.02); background: ${colors.orangeDk}; }
        .header-cta-trk::after { content: ""; position: absolute; top: 0; left: -130%; width: 55%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,.5), transparent); transform: skewX(-20deg); transition: left .6s ease; }
        .header-cta-trk:hover::after { left: 150%; }
        .nav-toggle-trk { display: none; width: 44px; height: 44px; padding: 12px 10px; border: none; background: transparent; cursor: pointer;
          flex-direction: column; justify-content: space-between; align-items: stretch; }
        .nav-toggle-trk span { display: block; height: 3px; border-radius: 3px; background: ${colors.espresso}; transition: transform .3s ease, opacity .2s ease; }
        .nav-toggle-trk.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .nav-toggle-trk.open span:nth-child(2) { opacity: 0; }
        .nav-toggle-trk.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
        .nav-menu-trk { display: flex; align-items: center; justify-content: center; flex: 1; gap: clamp(6px,1.5vw,20px); }
        .nav-menu-trk a { text-decoration: none; color: ${colors.espresso}; font-family: ${fonts.display}; font-weight: 500;
          font-size: clamp(13px,1.35vw,15px); padding: 6px 2px; white-space: nowrap; transition: color .2s; cursor: pointer; }
        .nav-menu-trk a:hover { color: ${colors.orangeDk}; }

        @media (max-width: 720px) {
          .header-cta-trk { display: none; }
          .nav-toggle-trk { display: flex; }
          .nav-menu-trk { position: absolute; left: 0; right: 0; top: 100%; flex-direction: column; justify-content: flex-start;
            align-items: stretch; flex: none; gap: 0; background: rgba(255,247,236,.98); backdrop-filter: blur(10px);
            border-top: 1px solid ${colors.beige}; box-shadow: 0 14px 26px rgba(42,27,18,.14);
            max-height: 0; overflow: hidden; opacity: 0; pointer-events: none; transition: max-height .3s ease, opacity .25s ease; }
          .nav-menu-trk.open { max-height: 78vh; overflow: auto; opacity: 1; pointer-events: auto; }
          .nav-menu-trk a { padding: 14px 22px; font-size: clamp(15px,4vw,17px); border-bottom: 1px solid rgba(232,201,160,.4); }
          .nav-menu-trk a:last-child { border-bottom: none; }
          .nav-menu-trk a:active { background: ${colors.beigeSoft}; }
        }
      `}</style>

      <header className={`header-trk${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-trk">
          <a href="#" className="brand-trk" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            {brand.logoUrl && <img src={brand.logoUrl} alt={brand.name} style={{ height: 42, width: 'auto' }} />}
            <span>
              <span style={{ display: 'block', fontFamily: fonts.display, fontSize: 'clamp(19px,5vw,23px)', fontWeight: 700, letterSpacing: '.04em', color: colors.espresso, lineHeight: 1 }}>
                {brand.name}
              </span>
              <span style={{ display: 'block', fontSize: 'clamp(10px,2.7vw,11px)', color: colors.brownSoft, lineHeight: 1.1 }}>
                {brand.tagline}
              </span>
            </span>
          </a>

          <nav id="navMenu" className={`nav-menu-trk${open ? ' open' : ''}`} aria-label="เมนูนำทาง">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { handleAnchorClick(e, item.href.slice(1)); setOpen(false); }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="header-cta-trk"
            id="headerCta"
            href="#contact"
            onClick={(e) => handleAnchorClick(e, 'contact')}
          >
            สนใจแฟรนไชส์ 🧋
          </a>

          <button
            className={`nav-toggle-trk${open ? ' open' : ''}`}
            id="navToggle"
            aria-label="เมนู"
            aria-expanded={open}
            aria-controls="navMenu"
            onClick={() => setOpen((o) => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
    </>
  );
}
