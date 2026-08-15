import { highlights } from '../data/siteData';
import SectionHeading from './SectionHeading';
import StatCard from './StatCard';
import Reveal from './Reveal';

export default function Highlights() {
  return (
    <section id="highlights" className="section-trk">
      <style>{`
        .stats-grid-trk { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 18px; margin-top: 6px; }
        @media (max-width: 720px) { .stats-grid-trk { grid-template-columns: 1fr 1fr; } }
      `}</style>
      <div style={{ width: '100%', maxWidth: 1140, margin: '0 auto', padding: '0 22px' }}>
        <Reveal><SectionHeading title={highlights.heading} subtitle={highlights.body} /></Reveal>
        <div className="stats-grid-trk">
          {highlights.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <StatCard value={s.value} label={s.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
