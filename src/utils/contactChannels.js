import { LineIcon, FacebookIcon, TelIcon } from '../components/Icons';
import { colors } from '../styles/theme';

// สร้างรายการช่องทางติดต่อจาก siteData.contact — ใช้ร่วมกันทั้ง Contact section และ FAB
export function buildChannels(contact) {
  const items = [];
  if (contact.lineUrl) {
    items.push({ href: contact.lineUrl, blank: true, bg: '#06C755', bgDk: '#049645', glow: 'rgba(6,199,85,.38)', label: contact.lineLabel || 'LINE', cap: contact.lineLabel || 'LINE', Icon: LineIcon });
  }
  if (contact.facebookUrl) {
    items.push({ href: contact.facebookUrl, blank: true, bg: '#1877F2', bgDk: '#0F5CC4', glow: 'rgba(24,119,242,.38)', label: contact.facebookLabel || 'Facebook', cap: 'Facebook', Icon: FacebookIcon });
  }
  (contact.phones || []).forEach((num) => {
    items.push({ href: 'tel:' + String(num).replace(/[^0-9+]/g, ''), blank: false, bg: colors.orange, bgDk: colors.orangeDk, glow: 'rgba(242,145,61,.38)', label: num, cap: num, Icon: TelIcon });
  });
  return items;
}
