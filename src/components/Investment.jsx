import { colors, fonts, radius, shadow } from '../styles/theme';
import { investment } from '../data/siteData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Investment() {
  return (
    <section id="investment" className="section-trk" style={{ background: `linear-gradient(180deg, ${colors.cream}, ${colors.beigeSoft})` }}>
      <div style={{ width: '100%', maxWidth: 1140, margin: '0 auto', padding: '0 22px' }}>
        <Reveal><SectionHeading title={investment.heading} /></Reveal>
        <Reveal>
          <div style={{
            background: '#fff', borderRadius: radius.lg, boxShadow: shadow, maxWidth: 660, margin: '0 auto',
            overflow: 'hidden', border: `2px solid ${colors.beige}`,
          }}>
            {investment.rows.map((r) => (
              <div key={r.label} style={{
                display: 'flex', justifyContent: 'space-between', gap: 16, padding: '16px 26px',
                borderBottom: `1px solid ${colors.beigeSoft}`,
              }}>
                <span style={{ color: colors.brownSoft, whiteSpace: 'pre-line' }}>{r.label}</span>
                <span style={{ fontFamily: fonts.display, fontWeight: 600, color: colors.espresso, whiteSpace: 'nowrap' }}>{r.value}</span>
              </div>
            ))}
            {investment.total && (
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                padding: '22px 26px', background: colors.espresso, color: '#fff',
              }}>
                <span style={{ fontFamily: fonts.display, fontSize: 'clamp(14px,3.8vw,16px)' }}>งบลงทุนรวม</span>
                <span style={{ fontFamily: fonts.display, fontWeight: 600, fontSize: 'clamp(20px,4.6vw,26px)', color: colors.orange, textAlign: 'right', whiteSpace: 'nowrap' }}>
                  {investment.total}
                </span>
              </div>
            )}
          </div>
        </Reveal>
        {investment.notes && (
          <p style={{
            maxWidth: 660, margin: '18px auto 0', color: colors.brownSoft, fontSize: 'clamp(13.5px,3.6vw,15px)',
            textAlign: 'center', whiteSpace: 'pre-line',
          }}>
            {investment.notes}
          </p>
        )}
        {investment.otherCosts && investment.otherCosts.length > 0 && (
          <ul style={{
            maxWidth: 660, margin: '14px auto 0', paddingLeft: 22, color: colors.brownSoft,
            fontSize: 'clamp(13.5px,3.6vw,15px)', listStyle: 'disc',
          }}>
            {investment.otherCosts.map((x) => <li key={x} style={{ marginBottom: 5 }}>{x}</li>)}
          </ul>
        )}
      </div>
    </section>
  );
}
