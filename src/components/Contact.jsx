import { colors, fonts } from '../styles/theme';
import { contact } from '../data/siteData';
import { buildChannels } from '../utils/contactChannels';
import SectionHeading from './SectionHeading';
import BobaBubbles from './BobaBubbles';
import Reveal from './Reveal';

export default function Contact() {
  const channels = buildChannels(contact);

  return (
    <section id="contact" className="section-trk" style={{ background: colors.espresso, color: colors.cream, overflow: 'hidden' }}>
      <style>{`
        .channel-trk { position: relative; display: flex; flex-direction: column; align-items: center; gap: 12px;
          text-decoration: none; color: ${colors.cream}; width: 128px; padding: 22px 14px 18px;
          border-radius: 20px; background: rgba(255,255,255,.045); border: 1px solid rgba(255,255,255,.1);
          backdrop-filter: blur(6px); transition: transform .2s ease, border-color .2s ease, background .2s ease, box-shadow .2s ease; }
        .channel-trk:hover { transform: translateY(-6px); background: rgba(255,255,255,.08);
          border-color: rgba(255,255,255,.22); box-shadow: 0 16px 34px rgba(0,0,0,.35); }
        .channel-ic-trk { width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
          color: #fff; transition: transform .2s ease, box-shadow .2s ease; }
        .channel-trk:hover .channel-ic-trk { transform: scale(1.08); }
        .channel-trk:focus-visible { outline: 3px solid rgba(255,255,255,.6); outline-offset: 3px; }
        .channel-cap-trk { font-family: ${fonts.display}; font-weight: 500; font-size: clamp(13px,3.4vw,14px); white-space: nowrap; }
        @media (max-width: 520px) {
          .contact-channels-trk { flex-direction: row; flex-wrap: wrap; align-items: stretch; gap: 14px 10px; }
          .contact-channels-trk .channel-trk { flex: 0 0 calc(50% - 10px); width: auto; padding-left: 8px; padding-right: 8px; }
        }
      `}</style>
      <BobaBubbles />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 1140, margin: '0 auto', padding: '0 22px' }}>
        <Reveal><SectionHeading title="สนใจเปิดร้าน TARUKA?" subtitle="ทักหาเราได้เลย ทีมงานพร้อมให้คำปรึกษาฟรี" dark /></Reveal>
        <div id="contactChannels" className="contact-channels-trk" style={{ display: 'flex', gap: 'clamp(16px,4vw,24px)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 8 }}>
          {channels.map((c) => {
            const Icon = c.Icon;
            return (
              <a
                key={c.label}
                className="channel-trk"
                href={c.href}
                target={c.blank ? '_blank' : undefined}
                rel={c.blank ? 'noopener' : undefined}
                aria-label={c.cap}
              >
                <span
                  className="channel-ic-trk"
                  style={{
                    background: `linear-gradient(150deg, ${c.bg}, ${c.bgDk})`,
                    boxShadow: `0 10px 22px ${c.glow}`,
                  }}
                >
                  <Icon />
                </span>
                <span className="channel-cap-trk">{c.cap}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
