import { useState } from 'react';
import { colors, fonts, radius, shadow } from '../styles/theme';
import { roi } from '../data/siteData';
import SectionHeading from './SectionHeading';
import RoiRow from './RoiRow';
import Reveal from './Reveal';

export default function ROI() {
  const columns = roi.columns || [];
  const rows = roi.rows || [];
  const defaultIdx = Math.max(0, columns.indexOf('200'));
  const [active, setActive] = useState(defaultIdx >= 0 ? defaultIdx : 0);

  return (
    <section id="roi" className="section-trk">
      <style>{`
        .roi-tab-trk { font-family: ${fonts.display}; font-weight: 500; font-size: clamp(13.5px,3.6vw,15px); line-height: 1;
          min-height: 40px; padding: 0 18px; border: 2px solid ${colors.beige}; background: #fff; color: ${colors.brownSoft};
          border-radius: 999px; cursor: pointer; transition: transform .12s, background .2s, border-color .2s, color .2s, box-shadow .2s; }
        .roi-tab-trk:hover { border-color: ${colors.orange}; transform: translateY(-1px); }
        .roi-tab-trk.active { background: ${colors.orange}; border-color: ${colors.orangeDk}; color: ${colors.espresso};
          font-weight: 600; box-shadow: 0 8px 18px rgba(242,145,61,.38); }
        .roi-tab-trk:focus-visible { outline: 3px solid rgba(242,145,61,.45); outline-offset: 2px; }
        @media (max-width: 520px) {
          .roi-tabs-trk { flex-wrap: nowrap; gap: 6px; }
          .roi-tab-trk { flex: 1 1 0; min-width: 0; padding: 0 8px; }
        }
      `}</style>
      <div style={{ width: '100%', maxWidth: 1140, margin: '0 auto', padding: '0 22px' }}>
        <Reveal><SectionHeading title={roi.heading} /></Reveal>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <div style={{
            textAlign: 'center', fontFamily: fonts.display, fontWeight: 500, color: colors.brownSoft,
            fontSize: 'clamp(13.5px,3.6vw,15px)', marginBottom: 14,
          }}>
            เลือกจำนวนขายต่อวัน (แก้ว)
          </div>
          <div className="roi-tabs-trk" role="tablist" aria-label="จำนวนขายต่อวัน" style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 22,
          }}>
            {columns.map((col, i) => (
              <button
                key={col}
                type="button"
                role="tab"
                className={`roi-tab roi-tab-trk${i === active ? ' active' : ''}`}
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
              >
                {col}
              </button>
            ))}
          </div>
          <Reveal>
            <div style={{ background: '#fff', border: `2px solid ${colors.beige}`, borderRadius: radius.lg, overflow: 'hidden', boxShadow: shadow }}>
              {rows.map((r, i) => (
                <RoiRow
                  key={r.label}
                  label={r.label}
                  value={(r.values || [])[active] || '—'}
                  isTotal={i === rows.length - 1}
                />
              ))}
            </div>
          </Reveal>
        </div>
        {roi.notes && roi.notes.length > 0 && (
          <ul style={{
            margin: '18px auto 0', maxWidth: 560, paddingLeft: 22, color: colors.brownSoft,
            fontSize: 'clamp(12.5px,3.4vw,14px)', listStyle: 'disc',
          }}>
            {roi.notes.map((n) => <li key={n} style={{ marginBottom: 5 }}>{n}</li>)}
          </ul>
        )}
      </div>
    </section>
  );
}
