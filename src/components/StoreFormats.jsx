import { colors, radius, shadow } from '../styles/theme';
import { storeFormats } from '../data/siteData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function StoreFormats() {
  if (!storeFormats || !storeFormats.length) return null;

  return (
    <section id="formats" className="section-trk">
      <style>{`
        .formats-grid-trk { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 26px; }
        .format-card-trk li { padding-left: 28px; position: relative; margin-bottom: 9px; color: ${colors.brownSoft}; }
        .format-card-trk li::before { content: "✓"; position: absolute; left: 0; top: -1px; width: 20px; height: 20px;
          border-radius: 50%; background: ${colors.matcha}; color: #fff; font-size: clamp(11px,2.9vw,12px);
          display: flex; align-items: center; justify-content: center; font-weight: 700; }
      `}</style>
      <div style={{ width: '100%', maxWidth: 1140, margin: '0 auto', padding: '0 22px' }}>
        <Reveal><SectionHeading title="รูปแบบร้าน" subtitle="เลือกรูปแบบที่เหมาะกับทำเลและงบของคุณ" /></Reveal>
        <div className="formats-grid-trk">
          {storeFormats.map((f, i) => (
            <Reveal key={f.name} delay={i * 70}>
              <div className="format-card-trk" style={{
                background: '#fff', borderRadius: radius.lg, boxShadow: shadow, overflow: 'hidden', border: `2px solid ${colors.beige}`,
              }}>
                <div style={{
                  aspectRatio: '1/1', background: f.imageUrl ? `url('${f.imageUrl}')` : colors.beigeSoft,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                }} />
                <div style={{ padding: '22px 24px' }}>
                  <h3 style={{ fontSize: 'clamp(19px,5vw,23px)', color: colors.espresso, marginBottom: 12 }}>{f.name}</h3>
                  <ul>
                    {(f.points || []).map((p) => <li key={p}>{p}</li>)}
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
