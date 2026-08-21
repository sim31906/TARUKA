import { useState } from 'react';
import { colors, fonts, radius, shadow } from '../styles/theme';
import { faq } from '../data/siteData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

function Stars({ count }) {
  return (
    <span style={{ color: colors.orange, letterSpacing: 1, flexShrink: 0, fontSize: 13 }}>
      {'★'.repeat(count)}
      <span style={{ color: colors.beige }}>{'★'.repeat(5 - count)}</span>
    </span>
  );
}

function FaqList({ list }) {
  return (
    <div style={{ marginTop: 18 }}>
      <p style={{
        fontFamily: fonts.display, fontWeight: 600, color: colors.espresso,
        fontSize: 'clamp(13.5px,3.6vw,15px)', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <span>{list.icon}</span> {list.title}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {list.items.map((it, i) => (
          <div key={it.text} className="faq-row-trk" style={{
            display: 'flex', alignItems: 'center', gap: 12,
            background: colors.beigeSoft, borderRadius: radius.sm, padding: '10px 14px 10px 10px',
          }}>
            {list.variant === 'avoid' ? (
              <span style={{
                flexShrink: 0, width: 22, height: 22, borderRadius: '50%',
                background: '#fdece0', color: colors.orangeDk, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 12, fontWeight: 700,
              }}>
                ✕
              </span>
            ) : (
              <span style={{
                flexShrink: 0, width: 22, height: 22, borderRadius: '50%',
                background: `linear-gradient(150deg, ${colors.orange}, ${colors.orangeDk})`,
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 700, fontFamily: fonts.display,
                boxShadow: '0 4px 10px rgba(242,145,61,.4)',
              }}>
                {i + 1}
              </span>
            )}
            <span style={{ flex: 1, color: colors.brownSoft, fontSize: 'clamp(13px,3.5vw,14.5px)' }}>
              {it.text}
            </span>
            {it.stars && <Stars count={it.stars} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function FaqItem({ item, index, open, onToggle }) {
  const paragraphs = item.a.split('\n\n');
  return (
    <div
      className="faq-card-trk"
      style={{
        background: '#fff', borderRadius: radius.sm, boxShadow: open ? '0 16px 34px rgba(242,145,61,.22)' : shadow,
        border: `2px solid ${open ? colors.orange : colors.beige}`, overflow: 'hidden',
        transition: 'border-color .25s ease, box-shadow .25s ease',
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        style={{
          display: 'flex', alignItems: 'center', gap: 14,
          width: '100%', border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left',
          padding: '18px 20px',
        }}
      >
        <span style={{
          flexShrink: 0, width: 30, height: 30, borderRadius: '50%',
          background: open ? `linear-gradient(150deg, ${colors.orange}, ${colors.orangeDk})` : colors.beigeSoft,
          color: open ? '#fff' : colors.orangeDk, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: fonts.display, fontWeight: 700, fontSize: 12.5, transition: 'background .25s ease, color .25s ease',
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span style={{
          flex: 1, fontFamily: fonts.display, fontWeight: 600, color: colors.espresso,
          fontSize: 'clamp(14.5px,3.8vw,17px)',
        }}>
          {item.q}
        </span>
        <span style={{
          flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: colors.beigeSoft,
          color: colors.orangeDk, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18, lineHeight: 1, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .25s ease',
        }}>
          +
        </span>
      </button>
      <div style={{ maxHeight: open ? 1400 : 0, overflow: 'hidden', transition: 'max-height .35s ease' }}>
        <div style={{ padding: '0 20px 22px 64px' }}>
          {paragraphs.map((p, i) => (
            <p key={i} style={{
              margin: i === 0 ? 0 : '10px 0 0', color: colors.brownSoft,
              fontSize: 'clamp(13.5px,3.6vw,15px)', lineHeight: 1.7,
            }}>
              {p}
            </p>
          ))}
          {item.highlight && (
            <p style={{
              marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'linear-gradient(120deg, #fff3e6, #ffe6cc)', color: colors.orangeDk,
              fontFamily: fonts.display, fontWeight: 600, fontSize: 'clamp(12.5px,3.4vw,14px)',
              padding: '9px 16px', borderRadius: 999, boxShadow: '0 6px 16px rgba(242,145,61,.22)',
            }}>
              {item.highlight}
            </p>
          )}
          {item.lists && item.lists.map((list) => <FaqList key={list.title} list={list} />)}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section-trk" style={{ position: 'relative', overflow: 'hidden', background: `linear-gradient(180deg, ${colors.cream}, ${colors.beigeSoft})` }}>
      <style>{`
        .faq-card-trk:hover { transform: translateY(-2px); }
        .faq-card-trk { transition: transform .2s ease, border-color .25s ease, box-shadow .25s ease; }
        .faq-row-trk { transition: background .2s ease; }
        .faq-row-trk:hover { background: #fbe4c8; }
      `}</style>
      <div aria-hidden="true" style={{
        position: 'absolute', top: -60, right: -60, width: 220, height: 220, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(242,145,61,.14), transparent 70%)',
      }} />
      <div style={{ width: '100%', maxWidth: 780, margin: '0 auto', padding: '0 22px', position: 'relative' }}>
        <Reveal><SectionHeading title={faq.heading} subtitle="รวมคำตอบที่ผู้สนใจแฟรนไชส์ถามบ่อยที่สุด" /></Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {faq.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 70}>
              <FaqItem item={item} index={i} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
