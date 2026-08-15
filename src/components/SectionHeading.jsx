import { colors, fonts } from '../styles/theme';

export default function SectionHeading({ title, subtitle, dark = false }) {
  return (
    <>
      <style>{`
        .section-heading-trk { font-family: ${fonts.display}; font-weight: 700; font-size: clamp(30px,5vw,46px);
          text-align: center; line-height: 1.15; }
        .section-heading-trk::after { content: ""; display: block; width: 58px; height: 6px; border-radius: 6px;
          background: ${colors.orange}; margin: 24px auto 0; }
        .section-sub-trk { text-align: center; color: ${dark ? colors.beige : colors.brownSoft}; max-width: 640px;
          margin: 10px auto 34px; font-size: clamp(15px,4vw,17px); text-wrap: pretty; white-space: pre-line; }
        @media (max-width: 720px) { .section-sub-trk { white-space: normal; } }
      `}</style>
      <h2 className="section-heading-trk" style={{ color: dark ? '#fff' : colors.espresso, marginBottom: subtitle ? 0 : 36 }}>
        {title}
      </h2>
      {subtitle && <p className="section-sub-trk">{subtitle}</p>}
    </>
  );
}
