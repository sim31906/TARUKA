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
        .channel-trk { display: flex; flex-direction: column; align-items: center; gap: 9px; text-decoration: none;
          color: ${colors.cream}; width: 104px; }
        .channel-ic-trk { width: 62px; height: 62px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
          color: #fff; box-shadow: 0 10px 22px rgba(0,0,0,.32); transition: transform .15s; }
        .channel-trk:hover .channel-ic-trk { transform: translateY(-4px) scale(1.05); }
        .channel-trk:focus-visible .channel-ic-trk { outline: 3px solid rgba(255,255,255,.6); outline-offset: 3px; }
        .channel-cap-trk { font-family: ${fonts.display}; font-weight: 500; font-size: clamp(13px,3.4vw,14px); white-space: nowrap; }
        @media (max-width: 520px) {
          .contact-channels-trk { flex-direction: row; flex-wrap: wrap; align-items: flex-start; gap: 22px 10px; }
          .contact-channels-trk .channel-trk { flex: 0 0 calc(50% - 5px); }
        }
      `}</style>
      <BobaBubbles />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 1140, margin: '0 auto', padding: '0 22px' }}>
        <Reveal><SectionHeading title="สนใจเปิดร้าน TARUKA?" subtitle="ทักหาเราได้เลย ทีมงานพร้อมให้คำปรึกษาฟรี" dark /></Reveal>
        <div id="contactChannels" className="contact-channels-trk" style={{ display: 'flex', gap: 'clamp(18px,4vw,30px)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 8 }}>
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
                <span className="channel-ic-trk" style={{ background: c.bg }}><Icon /></span>
                <span className="channel-cap-trk">{c.cap}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
