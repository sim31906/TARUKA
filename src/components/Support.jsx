import { colors, fonts, radius, shadow } from '../styles/theme';
import { support } from '../data/siteData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Support() {
  return (
    <section id="support" className="section-trk">
      <style>{`
        .support-grid-trk { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 22px; }
      `}</style>
      <div style={{ width: '100%', maxWidth: 1140, margin: '0 auto', padding: '0 22px' }}>
        <Reveal><SectionHeading title={support.heading} /></Reveal>
        <div className="support-grid-trk">
          {support.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70}>
              <div style={{
                background: '#fff', borderRadius: radius.lg, padding: '26px 24px', boxShadow: shadow,
                border: `2px solid ${colors.beige}`, borderTop: `5px solid ${colors.orange}`,
              }}>
                <h3 style={{ fontFamily: fonts.display, fontSize: 'clamp(16px,4.4vw,19px)', marginBottom: 8, color: colors.espresso }}>
                  {it.title}
                </h3>
                <p style={{ color: colors.brownSoft, fontSize: 'clamp(13.5px,3.6vw,15px)' }}>{it.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
