import { useEffect, useState } from 'react';
import { colors, fonts } from '../styles/theme';
import { contact } from '../data/siteData';
import { buildChannels } from '../utils/contactChannels';
import { ChatIcon, CloseIcon } from './Icons';

export default function ContactFab() {
  const channels = buildChannels(contact);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onDocClick(e) {
      if (open && !e.target.closest('#contactFab')) setOpen(false);
    }
    function onKey(e) { if (e.key === 'Escape') setOpen(false); }
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <style>{`
        .fab-trk { position: fixed; right: 18px; bottom: 18px; z-index: 60; display: flex; flex-direction: column;
          align-items: flex-end; gap: 12px; pointer-events: none; }
        .fab-items-trk { display: flex; flex-direction: column; align-items: flex-end; gap: 12px;
          opacity: 0; transform: translateY(12px) scale(.96); pointer-events: none; transition: opacity .25s ease, transform .25s ease; }
        .fab-trk.open .fab-items-trk { opacity: 1; transform: none; pointer-events: auto; }
        .fab-item-trk { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .fab-label-trk { background: #fff; color: ${colors.espresso}; font-family: ${fonts.display}; font-weight: 500; font-size: 14px;
          padding: 6px 14px; border-radius: 999px; box-shadow: 0 6px 16px rgba(42,27,18,.18); white-space: nowrap; }
        .fab-btn-trk { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
          color: #fff; box-shadow: 0 6px 16px rgba(42,27,18,.28); flex: 0 0 auto; transition: transform .15s; }
        .fab-item-trk:hover .fab-btn-trk { transform: scale(1.08); }
        .fab-main-trk { position: relative; width: 60px; height: 60px; border-radius: 50%; border: none; cursor: pointer;
          pointer-events: auto; background: ${colors.orange}; color: #fff; box-shadow: 0 12px 28px rgba(242,145,61,.5);
          display: flex; align-items: center; justify-content: center; transition: background .2s; }
        .fab-main-trk:hover { background: ${colors.orangeDk}; }
        .fab-ico-trk { position: absolute; transition: opacity .2s ease, transform .25s ease; }
        .fab-ico-close-trk { opacity: 0; transform: scale(.5); }
        .fab-trk.open .fab-ico-chat-trk { opacity: 0; transform: scale(.5); }
        .fab-trk.open .fab-ico-close-trk { opacity: 1; transform: scale(1); }
      `}</style>

      <div className={`fab-trk${open ? ' open' : ''}`} id="contactFab">
        <div className="fab-items-trk" id="fabItems">
          {channels.map((c) => {
            const Icon = c.Icon;
            return (
              <a
                key={c.label}
                className="fab-item-trk"
                href={c.href}
                target={c.blank ? '_blank' : undefined}
                rel={c.blank ? 'noopener' : undefined}
                aria-label={c.label}
                onClick={() => setOpen(false)}
              >
                <span className="fab-label-trk">{c.label}</span>
                <span className="fab-btn-trk" style={{ background: c.bg }}><Icon /></span>
              </a>
            );
          })}
        </div>
        <button
          className="fab-main-trk"
          id="fabMain"
          type="button"
          aria-label="ช่องทางติดต่อ"
          aria-expanded={open}
          onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
        >
          <ChatIcon className="fab-ico-trk fab-ico-chat-trk" />
          <CloseIcon className="fab-ico-trk fab-ico-close-trk" />
        </button>
      </div>
    </>
  );
}
