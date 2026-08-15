import { colors, fonts } from '../styles/theme';
import { brand, contact } from '../data/siteData';

export default function Footer() {
  return (
    <footer style={{ background: '#1f140d', color: colors.beige, textAlign: 'center', padding: '26px 20px', fontSize: 'clamp(12.5px,3.4vw,14px)' }}>
      <div style={{ width: '100%', maxWidth: 1140, margin: '0 auto', padding: '0 22px' }}>
        <div style={{ fontFamily: fonts.display, fontWeight: 500, color: colors.beigeSoft, marginBottom: 6, fontSize: 'clamp(13.5px,3.6vw,15px)' }}>
          บริษัท ทารุกะ จำกัด | TARUKA CO., LTD.
        </div>
        {contact.address && (
          <div style={{ marginBottom: 8, lineHeight: 1.6, wordBreak: 'keep-all', textWrap: 'balance' }}>
            {contact.address}
          </div>
        )}
        © <span>{new Date().getFullYear()}</span> <span>{brand.name}</span> · สงวนลิขสิทธิ์
      </div>
    </footer>
  );
}
