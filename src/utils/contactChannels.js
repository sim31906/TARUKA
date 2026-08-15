import { LineIcon, FacebookIcon, TelIcon } from '../components/Icons';
import { colors } from '../styles/theme';

// สร้างรายการช่องทางติดต่อจาก siteData.contact — ใช้ร่วมกันทั้ง Contact section และ FAB
export function buildChannels(contact) {
  const items = [];
  if (contact.lineUrl) {
    items.push({ href: contact.lineUrl, blank: true, bg: '#06C755', label: contact.lineLabel || 'LINE', cap: contact.lineLabel || 'LINE', Icon: LineIcon });
  }
  if (contact.facebookUrl) {
    items.push({ href: contact.facebookUrl, blank: true, bg: '#1877F2', label: contact.facebookLabel || 'Facebook', cap: 'Facebook', Icon: FacebookIcon });
  }
  (contact.phones || []).forEach((num) => {
    items.push({ href: 'tel:' + String(num).replace(/[^0-9+]/g, ''), blank: false, bg: colors.orange, label: num, cap: num, Icon: TelIcon });
  });
  return items;
}
