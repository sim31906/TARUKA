import { colors, radius, shadow } from '../styles/theme';
import { about } from '../data/siteData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function About() {
  const [brandWord, ...restWords] = about.heading.split(' ');
  const restHeading = restWords.join(' ');

  return (
    <section id="about" className="section-trk">
      <div style={{ width: '100%', maxWidth: 1140, margin: '0 auto', padding: '0 22px' }}>
        <Reveal>
          <SectionHeading
            title={
              <>
                <span style={{ fontSize: '1.4em' }}>{brandWord}</span>
                {restHeading ? ' ' + restHeading : ''}
              </>
            }
          />
        </Reveal>
        <Reveal delay={80}><p style={{
          maxWidth: 760, margin: '0 auto', textAlign: 'center',
          fontSize: 'clamp(15px,4.2vw,18px)', color: colors.brownSoft, textWrap: 'pretty',
        }}>
          {about.body}
        </p></Reveal>
        {about.images.filter(Boolean).length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginTop: 32 }}>
            {about.images.filter(Boolean).map((url, i) => (
              <img
                key={i}
                src={url}
                alt={about.heading}
                loading="lazy"
                style={{
                  width: 210, height: 210, objectFit: 'cover', borderRadius: radius.lg,
                  boxShadow: shadow, border: '4px solid #fff',
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
