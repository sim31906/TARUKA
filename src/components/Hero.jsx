import { colors, fonts, shadow } from '../styles/theme';
import { hero } from '../data/siteData';
import { triggerBobaSpark } from '../utils/bobaSpark';
import { handleAnchorClick } from '../utils/scrollTo';

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-trk { padding: 48px 0 70px; }
        .hero-grid-trk { display: grid; grid-template-columns: 1.05fr .95fr; gap: 30px; align-items: center;
          width: 100%; max-width: 1140px; margin: 0 auto; padding: 0 22px; }
        .hero-trk h1 { font-family: ${fonts.display}; font-size: clamp(42px,7vw,78px); font-weight: 700; line-height: 1.0; color: ${colors.espresso}; }
        .hero-sub-trk { font-size: clamp(12px,3.8vw,19px); color: ${colors.brownSoft}; max-width: 480px; margin: 22px 0 30px;
          white-space: pre-line; text-wrap: pretty; }
        .cta-row-trk { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .price-flag-trk { display: flex; align-items: center; gap: 10px; margin-top: 28px; font-family: ${fonts.display};
          color: ${colors.brownSoft}; font-size: clamp(13.5px,3.6vw,15px); }
        .price-flag-trk b { font-family: ${fonts.display}; font-size: clamp(26px,7vw,34px); color: ${colors.espresso}; font-weight: 600; }
        .hero-vis-trk { position: relative; display: flex; justify-content: center; align-items: center; min-height: 430px; }
        .blob-trk { position: absolute; width: 440px; height: 440px; border-radius: 46% 54% 52% 48%/52% 46% 54% 48%;
          background: radial-gradient(circle at 35% 30%, ${colors.beige}, ${colors.orange}); filter: blur(2px); animation: morph 9s ease-in-out infinite; }
        .hero-img-trk { position: relative; width: 400px; height: 400px; object-fit: contain; background: #fff; padding: 11%;
          border-radius: 50%; border: 10px solid #fff; box-shadow: ${shadow}; z-index: 2; }
        .pearl-trk { position: absolute; border-radius: 50%; background: ${colors.boba};
          box-shadow: inset -4px -4px 8px rgba(255,255,255,.15); z-index: 3; will-change: transform; }
        .p1-trk { width: 46px; height: 46px; top: 6%; left: 12%; animation: floaty 5.5s ease-in-out infinite; }
        .p2-trk { width: 28px; height: 28px; top: 22%; right: 8%; animation: floaty 6.5s ease-in-out infinite .4s; }
        .p3-trk { width: 60px; height: 60px; bottom: 5%; right: 16%; background: ${colors.orange}; animation: floaty 7s ease-in-out infinite .2s; }
        .p4-trk { width: 22px; height: 22px; bottom: 20%; left: 6%; background: ${colors.matcha}; animation: floaty 5s ease-in-out infinite .6s; }
        .p5-trk { width: 34px; height: 34px; top: 52%; left: -2%; animation: floaty 6s ease-in-out infinite .3s; }

        .pill-trk { position: relative; overflow: hidden; display: inline-flex; align-items: center; gap: 8px; border: none;
          cursor: pointer; text-decoration: none; background: ${colors.orange}; color: #fff; font-family: ${fonts.display};
          font-weight: 500; font-size: clamp(13.5px,3.6vw,15px); padding: 12px 24px; border-radius: 999px;
          box-shadow: 0 8px 20px rgba(242,145,61,.38); transition: transform .15s, background .2s; }
        .pill-trk:hover { transform: translateY(-2px) scale(1.02); background: ${colors.orangeDk}; }
        .pill-trk::after { content: ""; position: absolute; top: 0; left: -130%; width: 55%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,.5), transparent); transform: skewX(-20deg); transition: left .6s ease; }
        .pill-trk:hover::after { left: 150%; }
        .pill-ghost-trk { background: #fff; color: ${colors.espresso}; border: 2px solid ${colors.espresso}; box-shadow: none; }
        .pill-ghost-trk:hover { background: ${colors.espresso}; color: #fff; }

        @media (max-width: 860px) {
          .hero-grid-trk { grid-template-columns: 1fr; text-align: center; }
          .hero-eyebrow-trk, .cta-row-trk, .price-flag-trk { justify-content: center; }
          .hero-sub-trk { margin-left: auto; margin-right: auto; }
          .hero-vis-trk { order: -1; min-height: 330px; }
          .hero-img-trk { width: 300px; height: 300px; }
          .blob-trk { width: 330px; height: 330px; }
        }
        @media (max-width: 720px) {
          .hero-sub-trk { white-space: normal; }
        }
        @media (max-width: 520px) {
          .cta-row-trk { flex-direction: column; align-items: stretch; }
          .cta-row-trk .pill-trk { width: 100%; justify-content: center; }
        }
        @media (max-width: 400px) {
          .hero-img-trk { width: 270px; height: 270px; }
          .blob-trk { width: 286px; height: 286px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .blob-trk, .pearl-trk { animation: none; }
          .pill-trk::after { display: none; }
        }
      `}</style>

      <section className="hero-trk" id="hero">
        <div className="hero-grid-trk">
          <div className="hero-copy">
            <h1>{hero.title}</h1>
            <p className="hero-sub-trk">{hero.subtitle}</p>
            <div className="cta-row-trk">
              <a
                className="pill-trk"
                id="heroCta"
                href="#contact"
                onClick={(e) => { triggerBobaSpark(e.clientX, e.clientY); handleAnchorClick(e, 'contact'); }}
              >
                {hero.primaryCtaText}
              </a>
              <a
                className="pill-trk pill-ghost-trk"
                href="#menu"
                onClick={(e) => handleAnchorClick(e, 'menu')}
              >
                ดูเมนู
              </a>
            </div>
            <div className="price-flag-trk">เริ่มต้นเพียง <b>19฿</b> / แก้ว</div>
          </div>
          <div className="hero-vis-trk">
            <div className="blob-trk"></div>
            <span className="pearl-trk p1-trk"></span>
            <span className="pearl-trk p2-trk"></span>
            <span className="pearl-trk p3-trk"></span>
            <span className="pearl-trk p4-trk"></span>
            <span className="pearl-trk p5-trk"></span>
            {hero.bgImageUrl && <img className="hero-img-trk" src={hero.bgImageUrl} alt="TARUKA" />}
          </div>
        </div>
      </section>
    </>
  );
}
