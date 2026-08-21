// ===================================================================
//  TARUKA Landing — เนื้อหาเว็บทั้งหมด (site content)
// ===================================================================
//  แก้ข้อความ/ราคา/ตารางคืนทุน/รูปภาพ/ลิงก์ติดต่อได้ที่ไฟล์นี้ที่เดียว
//  รูปภาพเก็บในโฟลเดอร์ public/assets/ (deploy ไปพร้อมเว็บ)
// ===================================================================

export const seo = {
  title: 'TARUKA Thailand — แฟรนไชส์ชานมไข่มุก เริ่มต้น 19฿/แก้ว',
  description:
    'TARUKA แฟรนไชส์ชานมไข่มุกและชาไต้หวัน กว่า 50 เมนู เริ่มต้นเพียง 19 บาท/แก้ว มีสาขากว่า 50 แห่งทั่วประเทศ ลงทุนคุ้ม คืนทุนไว พร้อมทีมงานดูแลครบวงจร สนใจเปิดร้าน ทักไลน์ @taruka ได้เลย',
};

export const brand = {
  name: 'TARUKA',
  logoUrl: '/assets/logo.png',
  tagline: 'ชานมไข่มุก & เครื่องดื่ม',
};

export const navItems = [
  { href: '#menu', label: 'เมนู' },
  { href: '#highlights', label: 'จุดเด่น' },
  { href: '#formats', label: 'รูปแบบร้าน' },
  { href: '#branches', label: 'สาขา' },
  { href: '#investment', label: 'งบลงทุน' },
  { href: '#roi', label: 'คืนทุน' },
  { href: '#support', label: 'การสนับสนุน' },
  { href: '#faq', label: 'คำถามที่พบบ่อย' },
  { href: '#contact', label: 'ติดต่อเรา' },
];

export const hero = {
  title: 'TARUKA',
  subtitle:
    'TARUKA ชานมไข่มุก เราจำหน่ายเครื่องดื่มหลากหลายประเภท\n มีให้เลือกมากกว่า 50 เมนู โดยเราคัดสรรวัตถุดิบคุณภาพและคิดค้นสูตรพิเศษ เพื่อให้มีรสชาติเป็นเอกลักษณ์แตกต่างจาก\nท้องตลาด และพัฒนาสร้างสรรค์เมนูเครื่องดื่มใหม่ ๆ อย่างสม่ำเสมอ',
  bgImageUrl: '/assets/logo.png',
  primaryCtaText: 'สนใจแฟรนไชส์ ทักไลน์เลย',
};

export const about = {
  heading: 'TARUKA คืออะไร',
  body:
    'TARUKA (ทารุกะ) คือแบรนด์เครื่องดื่มชานมไข่มุกและชาไต้หวันสัญชาติไทย ที่เกิดจากความตั้งใจนำรสชาติชาต้นตำรับมาถ่ายทอดผ่านทุกแก้ว ชื่อ "ทารุกะ" พร้อมอักษรญี่ปุ่น タルカ สะท้อนความประณีตแบบเอเชียที่เราใส่ใจในทุกรายละเอียด ตั้งแต่การคัดสรรใบชา ผลไม้ และท็อปปิ้งคุณภาพ เพื่อให้ลูกค้าได้สัมผัสรสชาติที่แท้จริง ในราคาที่จับต้องได้สำหรับทุกคน',
  images: [],
};

// เมนู — แบ่งเป็นคอลเลกชัน แต่ละหมวดมีโปสเตอร์ + รายการเครื่องดื่ม
export const menu = {
  heading: 'เมนูของเรา',
  body: 'คัดเมนูเด่นแบ่งเป็นคอลเลกชัน เลือกได้ตามมู้ดที่ชอบ',
  categories: [
    {
      name: 'MY BOBA MOOD',
      nameTh: 'ชานม & ไข่มุก',
      image: '/assets/menu/boba-mood.jpg',
      items: [
        { name: 'นมสดบราวน์ชูการ์ไข่มุก', price: '49฿' },
        { name: 'ชานมไต้หวันไข่มุก', price: '24฿' },
      ],
    },
    {
      name: 'CREAMY FRUIT KISS',
      nameTh: 'ชาผลไม้ชีส',
      image: '/assets/menu/fruit-cheese.jpg',
      items: [
        { name: 'ชาพีชชีส', price: '39฿' },
        { name: 'ชาแอปเปิ้ลชีส', price: '39฿' },
      ],
    },
    {
      name: 'SIGNATURE PURPLE LATTE',
      nameTh: 'มันม่วง',
      image: '/assets/menu/purple-latte.jpg',
      items: [
        { name: 'มันม่วงนมสด', price: '' },
        { name: 'ชานมมันม่วง', price: '' },
      ],
    },
    {
      name: 'AIYU JELLY FRESH VIBES',
      nameTh: 'โซดา',
      image: '/assets/menu/aiyu-jelly.jpg',
      items: [
        { name: 'พีชเลมอนโซดา', price: '' },
        { name: 'ซันไชน์', price: '' },
      ],
    },
    {
      name: 'MUST TRY',
      nameTh: 'บุกป๊อบข้าวบาร์เลย์',
      image: '/assets/menu/must-try.jpg',
      items: [
        { name: 'ชาไทยบุกป๊อบข้าวบาร์เลย์', price: '39฿' },
        { name: 'ชานมไต้หวันบุกป๊อบข้าวบาร์เลย์', price: '34฿' },
        { name: 'ชาเขียวมะลิบุกป๊อบข้าวบาร์เลย์', price: '34฿' },
      ],
    },
    {
      name: 'SIGNATURE MATCHA',
      nameTh: 'มัทฉะ',
      image: '/assets/menu/matcha.jpg',
      items: [
        { name: 'ชาเขียวมัทฉะนมสด', price: '' },
        { name: 'มัทฉะเลมอน', price: '' },
        { name: 'มัทฉะเลมอนโซดา', price: '' },
      ],
    },
    {
      name: 'DELICIOUS COCOA DRINK',
      nameTh: 'โกโก้',
      image: '/assets/menu/cocoa.jpg',
      items: [
        { name: 'โกโก้นมสด', price: '' },
        { name: 'ชานมโกโก้', price: '' },
      ],
    },
    {
      name: 'CLASSIC OR CHEESE',
      nameTh: 'โกโก้',
      image: '/assets/menu/cocoa-cheese.jpg',
      items: [
        { name: 'ชานมโกโก้', price: '29฿' },
        { name: 'ชานมโกโก้ชีส', price: '49฿' },
      ],
    },
    {
      name: 'CHOCO MAGIC',
      nameTh: 'โกโก้',
      image: '/assets/menu/choco-magic.jpg',
      items: [
        { name: 'ช็อกโกมิ้นท์', price: '' },
        { name: 'ช็อกโกบานาน่า', price: '' },
      ],
    },
    {
      name: 'PERFECT DRINKS',
      nameTh: 'ชานม & ไข่มุก',
      image: '/assets/menu/perfect-drinks-milktea-cheese.jpg',
      items: [{ name: 'ชานมไต้หวันชีส', price: '39฿' }],
    },
    {
      name: 'A CUP OF HAPPINESS',
      nameTh: 'ชาผลไม้ชีส',
      image: '/assets/menu/cup-of-happiness-strawberry-cheese.jpg',
      items: [{ name: 'ชาสตรอว์เบอร์รี่ชีส', price: '39฿' }],
    },
    {
      name: 'BROWN SUGAR',
      nameTh: 'ชานม & ไข่มุก',
      image: '/assets/menu/brown-sugar.jpg',
      items: [
        { name: 'ชานมไต้หวันบราวน์ชูก้าร์', price: '' },
        { name: 'นมสดบราวน์ชูก้าร์', price: '' },
      ],
    },
    {
      name: 'THAI TEA',
      nameTh: 'ชาไทย',
      image: '/assets/menu/thai-tea-trio.jpg',
      items: [
        { name: 'ชาไทยชีส', price: '44฿' },
        { name: 'ชาไทยช็อคโก', price: '39฿' },
        { name: 'ชาไทยไข่มุก', price: '29฿' },
      ],
    },
    {
      name: 'MATCHA GREEN TEA FRESHMILK',
      nameTh: 'มัทฉะ',
      image: '/assets/menu/matcha-freshmilk.jpg',
      items: [{ name: 'ชาเขียวมัทฉะนมสด', price: '39฿' }],
    },
    {
      name: "IT'S BOBA TIME",
      nameTh: 'ชานม & ไข่มุก',
      image: '/assets/menu/boba-time.jpg',
      items: [
        { name: 'ชานมไต้หวันไข่มุก', price: '24฿' },
        { name: 'ชาเขียวมะลิไข่มุก', price: '24฿' },
      ],
    },
    {
      name: 'THAI TEA CHEESE BEST SELLER',
      nameTh: 'ชาไทย',
      image: '/assets/menu/thai-tea-cheese-bestseller.jpg',
      items: [{ name: 'ชาไทยชีส', price: '44฿' }],
    },
    {
      name: 'SUMMER FRESH',
      nameTh: 'โซดา',
      image: '/assets/menu/summer-fresh.jpg',
      items: [
        { name: 'พีชเลมอนโซดา', price: '39฿' },
        { name: 'ทารุกะซันไชน์', price: '39฿' },
      ],
    },
    {
      name: 'SODA SERIES',
      nameTh: 'โซดา',
      image: '/assets/menu/soda-series-1.jpg',
      items: [
        { name: 'บลูเบอร์รี่โซดา', price: '' },
        { name: 'แอปเปิ้ลโซดา', price: '' },
        { name: 'พีชโซดา', price: '' },
      ],
    },
    {
      name: 'SODA SERIES II',
      nameTh: 'โซดา',
      image: '/assets/menu/soda-series-2.jpg',
      items: [
        { name: 'สตรอว์เบอร์รี่โซดา', price: '' },
        { name: 'พาสชั่นฟรุตโซดา', price: '' },
        { name: 'เลมอนโซดา', price: '' },
      ],
    },
    {
      name: 'ENJOY YOUR CUP OF TEA',
      nameTh: 'ชานม & ไข่มุก',
      image: '/assets/menu/enjoy-cup-of-tea.jpg',
      items: [
        { name: 'ชาไทยไข่มุก', price: '29฿' },
        { name: 'ชานมไต้หวันไข่มุก', price: '24฿' },
        { name: 'ชาเขียวมะลิไข่มุก', price: '24฿' },
      ],
    },
    {
      name: 'HAVE A PEACHFUL DAY',
      nameTh: 'พีช',
      image: '/assets/menu/peachful-day.jpg',
      items: [
        { name: 'ชาพีช', price: '19฿' },
        { name: 'พีชเลมอนโซดา', price: '39฿' },
        { name: 'ชาพีชเลมอน', price: '39฿' },
      ],
    },
    {
      name: 'HAPPY PRIDE',
      nameTh: 'ชาผลไม้',
      image: '/assets/menu/happy-pride.jpg',
      items: [
        { name: 'ชาบลูเบอร์รี่', price: '19฿' },
        { name: 'ชาแอปเปิ้ล', price: '19฿' },
        { name: 'ชาพาสชั่นฟรุต', price: '19฿' },
        { name: 'ชาลิ้นจี่', price: '19฿' },
        { name: 'ชาสตรอว์เบอร์รี่', price: '19฿' },
      ],
    },
    {
      name: 'ALL I WANT IS CARAMEL',
      nameTh: 'คาราเมล',
      image: '/assets/menu/caramel.jpg',
      items: [
        { name: 'คาราเมลนมสด', price: '' },
        { name: 'ชานมคาราเมล', price: '' },
      ],
    },
    {
      name: 'FRESH & HEALTHY SHIZUOKA MATCHA',
      nameTh: 'มัทฉะ',
      image: '/assets/menu/matcha-lemonade.jpg',
      items: [
        { name: 'มัทฉะเลมอน', price: '39฿' },
        { name: 'มัทฉะเลมอนโซดา', price: '39฿' },
      ],
    },
    {
      name: 'JASMINE BLOOM',
      nameTh: 'มะลิ',
      image: '/assets/menu/jasmine-bloom.jpg',
      items: [
        { name: 'ชาเขียวมะลิชีส', price: '39฿' },
        { name: 'ชาเขียวมะลิ', price: '19฿' },
      ],
    },
    {
      name: 'LYCHEE MOOD',
      nameTh: 'ลิ้นจี่',
      image: '/assets/menu/lychee-mood.jpg',
      items: [
        { name: 'ชาลิ้นจี่', price: '19฿' },
        { name: 'ลิ้นจี่โซดา', price: '24฿' },
      ],
    },
    {
      name: 'VIOLET VIBES ONLY',
      nameTh: 'ชาผลไม้',
      image: '/assets/menu/violet-vibes.jpg',
      items: [
        { name: 'บลูเบอร์รี่โซดา', price: '' },
        { name: 'ชาบลูเบอร์รี่', price: '' },
        { name: 'บลูเบอร์รี่มิลค์กี้', price: '' },
      ],
    },
    {
      name: 'CHOCO OR CHEESE',
      nameTh: 'ชาไทย',
      image: '/assets/menu/choco-or-cheese.jpg',
      items: [
        { name: 'ชาไทยชีส', price: '44฿' },
        { name: 'ชาไทยช็อคโก', price: '39฿' },
      ],
    },
    {
      name: 'MILDLY PERFECT',
      nameTh: 'ชาผลไม้',
      image: '/assets/menu/mildly-perfect.jpg',
      items: [
        { name: 'สตรอว์เบอร์รี่มิลค์กี้', price: '39฿' },
        { name: 'นมชมพู', price: '34฿' },
        { name: 'สตรอว์เบอร์รี่โซดา', price: '24฿' },
        { name: 'ชาสตรอว์เบอร์รี่', price: '19฿' },
      ],
    },
    {
      name: "HAPPY MOTHER'S DAY",
      nameTh: 'อัญชัน',
      image: '/assets/menu/mothers-day-butterfly-pea.jpg',
      items: [
        { name: 'ชานมอัญชัน', price: '29฿' },
        { name: 'ชานมอัญชันครีมชีส', price: '49฿' },
      ],
    },
    {
      name: 'CANTALOUPE DOUBLE BLISS',
      nameTh: 'แคนตาลูป',
      image: '/assets/menu/cantaloupe.jpg',
      items: [
        { name: 'แคนตาลูปนมสด', price: '' },
        { name: 'ชานมแคนตาลูป', price: '' },
      ],
    },
    {
      name: 'APPLE MOOD ON',
      nameTh: 'ชาผลไม้',
      image: '/assets/menu/apple-mood.jpg',
      items: [
        { name: 'แอปเปิ้ลโซดา', price: '' },
        { name: 'แอปเปิ้ลมิลค์กี้', price: '' },
        { name: 'ชาแอปเปิ้ล', price: '' },
      ],
    },
    {
      name: 'TRY OUR BOBA',
      nameTh: 'ชานม & ไข่มุก',
      image: '/assets/menu/try-our-boba.jpg',
      items: [
        { name: 'ชานมไต้หวันบราวน์ชูก้าร์', price: '39฿' },
        { name: 'นมสดไข่มุก', price: '34฿' },
        { name: 'นมสดบราวน์ชูก้าร์', price: '49฿' },
      ],
    },
    {
      name: 'MATCHA SHIZUOKA',
      nameTh: 'มัทฉะ',
      image: '/assets/menu/matcha-shizuoka.jpg',
      items: [
        { name: 'มัทฉะเลมอน', price: '39฿' },
        { name: 'มัทฉะเลมอนโซดา', price: '39฿' },
        { name: 'มัทฉะนมสด', price: '39฿' },
      ],
    },
    {
      name: "SIGNATURE IT'S BOBA TIME",
      nameTh: 'ชานม & ไข่มุก',
      image: '/assets/menu/signature-boba-time.jpg',
      items: [
        { name: 'ชาไทยไข่มุก', price: '' },
        { name: 'ชานมไต้หวันไข่มุก', price: '' },
        { name: 'ชาเขียวมะลิไข่มุก', price: '' },
      ],
    },
    {
      name: 'FRUITY CHEESE TEA',
      nameTh: 'ชาผลไม้ชีส',
      image: '/assets/menu/fruity-cheese-tea.jpg',
      items: [
        { name: 'ชาสตรอว์เบอร์รี่ชีส', price: '39฿' },
        { name: 'ชาแอปเปิ้ลชีส', price: '39฿' },
        { name: 'ชาบลูเบอร์รี่ชีส', price: '39฿' },
        { name: 'ชาพีชชีส', price: '39฿' },
      ],
    },
    {
      name: 'THAI TEA II',
      nameTh: 'ชาไทย',
      image: '/assets/menu/thai-tea-2.jpg',
      items: [
        { name: 'ชาไทยช็อคโก', price: '39฿' },
        { name: 'ชาไทยชีส', price: '44฿' },
        { name: 'ชาไทย', price: '24฿' },
      ],
    },
    {
      name: 'BLISSFUL MINT SET',
      nameTh: 'มินท์',
      image: '/assets/menu/blissful-mint-set.jpg',
      items: [
        { name: 'มินท์นมสด', price: '' },
        { name: 'มินท์นมสดช็อคโก', price: '' },
        { name: 'ชานมมินท์', price: '' },
      ],
    },
    {
      name: 'PEACH SERIES',
      nameTh: 'พีช',
      image: '/assets/menu/peach-series.jpg',
      items: [
        { name: 'พีชเลมอนโซดา', price: '' },
        { name: 'ชาพีชเลมอน', price: '' },
        { name: 'ชาพีชชีส', price: '' },
        { name: 'ชาพีชไข่มุก', price: '' },
        { name: 'พีชโซดา', price: '' },
        { name: 'ชาพีช', price: '' },
      ],
    },
    {
      name: 'GRAPE MOMENT',
      nameTh: 'องุ่น',
      image: '/assets/menu/grape-moment.jpg',
      items: [
        { name: 'ชาองุ่น', price: '' },
        { name: 'ชาองุ่นชีส', price: '' },
        { name: 'องุ่นโซดา', price: '' },
      ],
    },
    {
      name: 'COFFEE TIME',
      nameTh: 'กาแฟ',
      image: '/assets/menu/coffee-time.jpg',
      items: [
        { name: 'ชานมกาแฟ', price: '24฿' },
        { name: 'กาแฟนมสด', price: '34฿' },
      ],
    },
    {
      name: 'MATCHA ENJOY FRESH DRINK',
      nameTh: 'มัทฉะ',
      image: '/assets/menu/matcha-fresh-drink.jpg',
      items: [
        { name: 'มัทฉะเลมอนโซดา', price: '' },
        { name: 'มัทฉะเลมอน', price: '' },
      ],
    },
    {
      name: 'FRUITY MILKY',
      nameTh: 'ชาผลไม้',
      image: '/assets/menu/fruity-milky.jpg',
      items: [
        { name: 'สตรอว์เบอร์รี่มิลค์กี้', price: '' },
        { name: 'แอปเปิ้ลมิลค์กี้', price: '' },
      ],
    },
    {
      name: 'SPECIAL DAY FRESH MILK',
      nameTh: 'นมสด',
      image: '/assets/menu/special-day-freshmilk.jpg',
      items: [
        { name: 'นมสดชีส', price: '49฿' },
        { name: 'นมสดไข่มุก', price: '34฿' },
        { name: 'นมสดบราวน์ชูก้าร์', price: '49฿' },
      ],
    },
    {
      name: 'MATCHA CHEESY HEART',
      nameTh: 'มัทฉะ',
      image: '/assets/menu/matcha-cheesy-heart.jpg',
      items: [{ name: 'มัทฉะนมสดชีส', price: '' }],
    },
    {
      name: 'MATCHA CHEESY HEART II',
      nameTh: 'มัทฉะ',
      image: '/assets/menu/matcha-cheesy-heart-2.jpg',
      items: [{ name: 'มัทฉะนมสดชีส', price: '' }],
    },
    {
      name: 'FRESH VIBES ALL DAY',
      nameTh: 'พีช',
      image: '/assets/menu/fresh-vibes-peach-lemon-tea.jpg',
      items: [{ name: 'ชาพีชเลมอน', price: '39฿' }],
    },
    {
      name: 'SWEET VIBES',
      nameTh: 'มันม่วง',
      image: '/assets/menu/sweet-vibes-purple-potato.jpg',
      items: [{ name: 'มันม่วงนมสด', price: '' }],
    },
    {
      name: 'WINTER COZY CUP',
      nameTh: 'ชาผลไม้ชีส',
      image: '/assets/menu/winter-cozy-cup.jpg',
      items: [
        { name: 'นมชมพูชีส', price: '' },
        { name: 'ชาสตรอว์เบอร์รี่ชีส', price: '' },
      ],
    },
    {
      name: 'REFRESH MODE ON',
      nameTh: 'ชาผลไม้',
      image: '/assets/menu/refresh-mode-passionfruit.jpg',
      items: [
        { name: 'ชาพาสชั่นฟรุต', price: '19฿' },
        { name: 'พาสชั่นฟรุตโซดา', price: '24฿' },
      ],
    },
    {
      name: 'MY COZY MOOD',
      nameTh: 'ชาไทย',
      image: '/assets/menu/cozy-mood-thai-tea.jpg',
      items: [{ name: 'ชาไทย', price: '24฿' }],
    },
    {
      name: 'PEACH TEA',
      nameTh: 'พีช',
      image: '/assets/menu/peach-tea.jpg',
      items: [{ name: 'ชาพีช', price: '19฿' }],
    },
    {
      name: 'MINTY CUTE DRINK',
      nameTh: 'มินท์',
      image: '/assets/menu/minty-cute-drink.jpg',
      items: [
        { name: 'มินท์นมสดช็อคโก', price: '49฿' },
        { name: 'มินท์นมสด', price: '34฿' },
      ],
    },
    {
      name: 'TEA TRIO SPECIAL',
      nameTh: 'ชานม & ไข่มุก',
      image: '/assets/menu/tea-trio-special.jpg',
      items: [
        { name: 'ชาไทยไข่มุก', price: '29฿' },
        { name: 'ชานมไต้หวันไข่มุก', price: '24฿' },
        { name: 'ชาเขียวมะลิไข่มุก', price: '24฿' },
      ],
    },
  ],
};

export const highlights = {
  heading: 'จุดเด่นของแบรนด์',
  body:
    'การใช้วัตถุดิบที่มีคุณภาพในการผลิตเครื่องดื่มแสนอร่อย จำหน่ายในราคาที่ผู้บริโภคจับต้องได้ \n เข้าถึงง่าย ราคาเริ่มต้นเพียง 19 บาท มีเมนูหลากหลายให้เลือก ตอบโจทย์ลูกค้าทุกเพศทุกวัย \n ปัจจุบันมีสาขาให้บริการกว่า 53 สาขาทั่วประเทศ (ข้อมูล ณ พ.ค. 69)',
  stats: [
    { label: 'ราคาเริ่มต้น', value: '19฿' },
    { label: 'เมนูเครื่องดื่ม', value: '50+' },
    { label: 'สาขาทั่วประเทศ', value: '53' },
    { label: 'รูปแบบร้าน (Kiosk/Cafe)', value: '2' },
  ],
};

// Carousel สาขาของเรา — รูปหน้าร้านจริง
export const branches = {
  heading: 'สาขาของเรา',
  body: 'บรรยากาศร้าน TARUKA สาขาต่าง ๆ ทั่วประเทศ',
  images: [
    '/assets/1.jpg',
    '/assets/2.jpg',
    '/assets/3.jpg',
    '/assets/4.jpg',
    '/assets/5.jpg',
    '/assets/6.jpg',
    '/assets/7.jpg',
    '/assets/8.jpg',
    '/assets/9.jpg',
    '/assets/10.jpg',
    '/assets/11.jpg',
  ],
};

// รายชื่อสาขาแยกตามภาค/จังหวัด — อ้างอิงจาก Google My Maps ทางการของ TARUKA (หมุด GPS จริง 37 จุด)
// พิกัด lat/lng ที่แนบมาคือหมุดจริงจากแผนที่ ใช้สร้างลิงก์ Google Maps แบบชี้ตำแหน่งตรง ๆ ได้
export const branchDirectory = {
  updatedAt: '18 สิงหาคม 2569',
  note: 'ข้อมูลสาขาอ้างอิงจาก Google My Maps ทางการของ TARUKA (หมุดพิกัด GPS จริงของแต่ละสาขา) ร้านเครื่องดื่มแฟรนไชส์เปิด-ปิดสาขาอยู่เสมอ โปรดตรวจสอบสถานะเปิด/ปิดของแต่ละสาขาอีกครั้งก่อนเดินทาง',
  regions: [
    {
      name: 'ภาคเหนือ',
      provinces: [
        {
          name: 'เชียงใหม่',
          count: '16 สาขา',
          branches: [
            { name: 'หลัง มช.', location: 'ต.สุเทพ อ.เมืองเชียงใหม่', lat: 18.7923678, lng: 98.9562563, gmapsName: 'Taruka ชานมไข่มุก-สาขาหลัง มช.' },
            { name: 'เจ็ดยอด', location: 'ต.ช้างเผือก อ.เมืองเชียงใหม่', lat: 18.8085144, lng: 98.9638515, gmapsName: 'TARUKA สาขาเจ็ดยอด' },
            { name: 'ปตท. ฟ้าฮ่าม', location: 'ต.ฟ้าฮ่าม อ.เมืองเชียงใหม่', lat: 18.8145706, lng: 99.0124397, gmapsName: 'TARUKA สาขา ปตท. ฟ้าฮ่าม' },
            { name: 'พระสิงห์', location: 'ต.พระสิงห์ อ.เมืองเชียงใหม่', lat: 18.7902103, lng: 98.9823037, gmapsName: 'Taruka สาขา พระสิงห์' },
            { name: 'ปั๊มบางจาก แม่เหียะ', location: 'ต.แม่เหียะ อ.เมืองเชียงใหม่', lat: 18.7406076, lng: 98.9649883, gmapsName: 'Taruka ปั๊มบางจาก แม่เหียะ' },
            { name: 'ตลาดแม่เหียะ', location: 'ต.แม่เหียะ อ.เมืองเชียงใหม่', lat: 18.7471664, lng: 98.941823, gmapsName: 'Taruka - ตลาดแม่เหียะ' },
            { name: 'ป่าตาล สันผักหวาน', location: 'ต.สันผักหวาน อ.หางดง เชียงใหม่', lat: 18.7220263, lng: 98.9554462, gmapsName: 'TARUKA สาขาป่าตาล สันผักหวาน' },
            { name: 'สันกำแพง', location: 'อ.สันกำแพง เชียงใหม่', lat: 18.7455417, lng: 99.1188526, gmapsName: 'Taruka สาขาสันกำแพง' },
            { name: 'ปตท.กองทราย สารภี', location: 'อ.สารภี เชียงใหม่', lat: 18.7235373, lng: 99.0113767, gmapsName: 'TARUKA สาขาปั๊มน้ำมันปตท.กองทราย สารภี' },
            { name: 'ตลาดธานินทร์', location: 'อ.เมืองเชียงใหม่', lat: 18.8043957, lng: 98.9837583, gmapsName: 'Taruka สาขาตลาดธานนิทร์' },
            { name: 'แม่โจ้', location: 'ใกล้มหาวิทยาลัยแม่โจ้ อ.สันทราย เชียงใหม่', lat: 18.8965793, lng: 99.0082129, gmapsName: 'Taruka สาขาแม่โจ้' },
            { name: 'สันป่าตอง', location: 'อ.สันป่าตอง เชียงใหม่', lat: 18.620031, lng: 98.8965165, gmapsName: 'Taruka ชานมไข่มุก สาขาสันป่าตอง' },
            { name: 'กาดก้อม', location: 'อ.เมืองเชียงใหม่', lat: 18.7747301, lng: 98.9907921, gmapsName: 'Taruka กาดก้อม' },
            { name: 'ฮอด', location: 'อ.ฮอด เชียงใหม่', lat: 18.1943929, lng: 98.6118449, gmapsName: 'Taruka สาขาฮอด' },
            { name: 'ช่างเคี่ยน', location: 'ต.ช้างเผือก อ.เมืองเชียงใหม่', lat: 18.8106794, lng: 98.9586274, gmapsName: 'Taruka สาขาช่างเคี่ยน' },
            { name: 'กาดฝรั่งแม่ริม', location: 'อ.แม่ริม เชียงใหม่', lat: 18.9020585, lng: 98.948574, gmapsName: 'Taruka สาขากาดฝรั่งแม่ริม' },
          ],
        },
        {
          name: 'ลำปาง',
          count: '9 สาขา',
          branches: [
            { name: 'ตลาดน้ำโท้ง', location: 'ต.บ่อแฮ้ว อ.เมืองลำปาง', lat: 18.3091572, lng: 99.4666806, gmapsName: 'Taruka สาขาตลาดน้ำโท้ง ลำปาง' },
            { name: 'ตลาดบ้านฟ่อน', location: 'อ.เมืองลำปาง', lat: 18.2409348, lng: 99.437237, gmapsName: 'Taruka สาขาตลาดบ้านฟ่อน' },
            { name: 'ตลาดออมสิน', location: 'ถ.บุญวาทย์ ต.สวนดอก อ.เมืองลำปาง', lat: 18.2888129, lng: 99.499269, gmapsName: 'Taruka สาขาตลาดออมสิน' },
            { name: 'ประตูม้า', location: 'ต.เวียงเหนือ อ.เมืองลำปาง', lat: 18.3000043, lng: 99.50524, gmapsName: 'Taruka สาขาประตูม้า' },
            { name: 'เถิน', location: 'ต.ล้อมแรด อ.เถิน ลำปาง', lat: 17.6056722, lng: 99.2099697, gmapsName: 'Taruka สาขาเถิน' },
            { name: 'พิชัย', location: 'ถ.พิชัย อ.เมืองลำปาง', lat: 18.3307326, lng: 99.5366496, gmapsName: 'Taruka สาขาพิชัย' },
            { name: 'ตลาดอัศวิน', location: 'ต.สบตุ๋ย อ.เมืองลำปาง', lat: 18.2893094, lng: 99.4873726, gmapsName: 'TARUKA สาขา ตลาดอัศวิน' },
            { name: 'หน้าโรงเรียนลำปางกัลยาณี', location: 'ถ.พหลโยธิน ต.สวนดอก อ.เมืองลำปาง', lat: 18.2862413, lng: 99.4988374, gmapsName: 'TARUKA สาขา หน้าโรงเรียนลำปางกัลยาณี' },
            { name: 'ปตท.ห้างฉัตร', location: 'อ.ห้างฉัตร ลำปาง', lat: 18.3182383, lng: 99.3537972, gmapsName: 'Taruka สาขา ปตท.ห้างฉัตร' },
          ],
        },
        {
          name: 'ลำพูน',
          count: '3 สาขา',
          branches: [
            { name: 'ตลาดลำพูนจตุจักร', location: 'อ.เมืองลำพูน', lat: 18.5568684, lng: 99.0359362, gmapsName: 'TARUKA สาขากาดจตุจักร' },
            { name: 'สันป่าฝ้าย', location: 'ต.บ้านกลาง อ.เมืองลำพูน', lat: 18.5831667, lng: 99.0485556, gmapsName: 'Taruka สาขาสันป่าฝ้าย' },
            { name: 'ตลาดแม่ทองริ้ว', location: 'อ.ป่าซาง ลำพูน', lat: 18.5331635, lng: 98.9400959, gmapsName: 'Taruka สาขาตลาดแม่ทองริ้ว ป่าซาง' },
          ],
        },
        {
          name: 'พะเยา',
          count: '1 สาขา',
          branches: [
            { name: 'มหาวิทยาลัยพะเยา', location: 'ต.แม่กา อ.เมืองพะเยา', lat: 19.0341293, lng: 99.9274307, gmapsName: 'Taruka สาขา ม.พะเยา' },
          ],
        },
        {
          name: 'เชียงราย',
          count: '3 สาขา',
          branches: [
            { name: 'รพ.เชียงรายประชานุเคราะห์', location: 'อ.เมืองเชียงราย', lat: 19.9005826, lng: 99.8292092, gmapsName: 'TARUKA สาขาโรงพยาบาลเชียงรายประชานุเคราะห์' },
            { name: 'ประตูเชียงใหม่', location: 'อ.เมืองเชียงราย', lat: 19.9073192, lng: 99.8235533, gmapsName: 'TARUKA สาขาประตูเชียงใหม่ เชียงราย' },
            { name: 'Caltex เชียงราย', location: 'อ.เมืองเชียงราย', lat: 19.914406, lng: 99.8455305, gmapsName: 'Taruka caltex เชียงราย' },
          ],
        },
        {
          name: 'แม่ฮ่องสอน',
          count: '2 สาขา',
          branches: [
            { name: 'ปาย', location: 'อ.ปาย แม่ฮ่องสอน', lat: 19.3565617, lng: 98.439686, gmapsName: 'TARUKA สาขาปาย' },
            { name: 'เมืองแม่ฮ่องสอน', location: 'อ.เมืองแม่ฮ่องสอน', lat: 19.3009133, lng: 97.9691271, gmapsName: 'Taruka สาขาแม่ฮ่องสอน' },
          ],
        },
        {
          name: 'ตาก',
          count: '1 สาขา',
          branches: [
            { name: 'แม่สอด', location: 'อ.แม่สอด ตาก', lat: 16.7192965, lng: 98.5908706, gmapsName: 'Taruka สาขาแม่สอด' },
          ],
        },
      ],
    },
    {
      name: 'ภาคกลาง',
      provinces: [
        {
          name: 'สมุทรปราการ',
          count: '1 สาขา',
          branches: [
            { name: 'ตรงข้ามโรงเรียนอัสสัมชัญสมุทรปราการ', location: 'หน้า 7-11 รร.อัสสัมชัญ ปากซอยทิพวัล 41 ต.บางเมืองใหม่ อ.เมืองสมุทรปราการ', lat: 13.628047, lng: 100.6054351, gmapsName: 'TARUKA ชานมไข่มุก สาขาอัสสัมชัญ สมุทรปราการ' },
          ],
        },
      ],
    },
    {
      name: 'ภาคตะวันออก',
      provinces: [
        {
          name: 'ชลบุรี',
          count: '1 สาขา',
          branches: [
            { name: 'บางแสน', location: 'ซอยสดใส บางแสน อ.เมืองชลบุรี', lat: 13.27964, lng: 100.9322112, gmapsName: 'Taruka Bangsaen' },
          ],
        },
      ],
    },
  ],
};

export const storeFormats = [
  {
    name: 'KIOSK (คีออส)',
    imageUrl: '/assets/kiosk.jpg',
    points: [
      'เหมาะสำหรับตั้งในพื้นที่ว่าง',
      'ขนาดเริ่มต้นที่ 2 x 2 เมตร',
      'ลงทุนต่ำ เริ่มต้นได้เร็ว',
    ],
  },
  {
    name: 'CAFE (คาเฟ่)',
    imageUrl: '/assets/cafe.jpg',
    points: [
      'เหมาะกับพื้นที่ที่เป็นอาคาร / ร้านค้า',
      'ออกแบบและตกแต่งเพิ่มเติม ให้เข้ากับพื้นที่เดิม',
      'สร้างประสบการณ์แบรนด์เต็มรูปแบบ',
    ],
  },
];

export const investment = {
  heading: 'งบลงทุน',
  rows: [
    { label: 'ค่าแฟรนไชส์', value: '75,900฿' },
    { label: 'ค่าก่อสร้างร้าน / Kiosk', value: '120,000 – 150,000฿' },
    { label: 'อุปกรณ์อื่นที่ต้องซื้อเพิ่ม', value: '15,000฿' },
  ],
  total: '210,000 – 250,000฿',
  notes:
    'งบลงทุนข้างต้นเป็นเพียงประมาณการ ขึ้นอยู่กับงบประมาณก่อสร้างตามขนาดพื้นที่และแบบที่ลูกค้าเลือก \n(ค่าก่อสร้าง Kiosk ลูกค้าจ่ายจริงตามงบประมาณและดำเนินการก่อสร้างเอง)',
  otherCosts: [
    'ค่าประกันสัญญา 10,000฿ (ชำระเมื่อทำสัญญา และได้รับคืนเมื่อยกเลิกสัญญา)',
    'กรณีต้องออกแบบใหม่ มีค่าออกแบบ 5,000 – 10,000฿',
  ],
};

export const roi = {
  heading: 'ประมาณการคืนทุน',
  columns: ['100', '200', '300', '400', '500'],
  rows: [
    { label: 'ราคาขายเฉลี่ย/แก้ว', values: ['30฿', '30฿', '30฿', '30฿', '30฿'] },
    { label: 'ยอดขายต่อวัน', values: ['3,000', '6,000', '9,000', '12,000', '15,000'] },
    { label: 'กำไรเฉลี่ย 50%', values: ['1,500', '3,000', '4,500', '6,000', '7,500'] },
    { label: 'กำไรก่อนหักค่าใช้จ่าย/เดือน', values: ['45,000', '90,000', '135,000', '180,000', '225,000'] },
    { label: 'ค่าเช่าที่', values: ['10,000', '10,000', '15,000', '20,000', '20,000'] },
    { label: 'ค่าจ้างพนักงาน', values: ['10,000', '20,000', '20,000', '30,000', '40,000'] },
    { label: 'ค่าน้ำ / ค่าไฟ / อื่นๆ', values: ['3,000', '3,500', '4,000', '5,000', '5,000'] },
    { label: 'ค่า POS / Wi-Fi', values: ['600', '600', '600', '600', '600'] },
    { label: 'กำไรสุทธิ/เดือน (โดยประมาณ)', values: ['21,400', '55,900', '95,400', '124,400', '159,400'] },
  ],
  notes: [
    'เลือกจำนวนแก้วที่ขายต่อวันด้านบน · คิดที่ราคาขายเฉลี่ย 30 บาท/แก้ว',
    'การคำนวณประมาณการดังกล่าวเป็นเพียงตัวอย่าง ผลจริงขึ้นกับทำเล ราคาขาย และการบริหารร้าน',
  ],
};

export const support = {
  heading: 'การสนับสนุนจากเรา',
  items: [
    { title: 'โกดังกระจายสินค้า', detail: 'ตั้งอยู่ จ.เชียงใหม่ สั่งวัตถุดิบและอุปกรณ์จากแฟรนไชส์ มีบริการจัดส่ง (ขนส่งเอกชนเก็บเงินปลายทางตามจริง หรือเข้ารับเองได้ที่โกดัง)' },
    { title: 'อบรมก่อนเปิดร้าน', detail: 'การอบรมใช้เวลา 1 วัน ที่ จ.เชียงใหม่ (หากต้องการอบรมนอกสถานที่ มีค่าใช้จ่ายตามระยะทาง)' },
    { title: 'ระบบ POS & Wi-Fi', detail: 'ระบบ POS Wongnai 16 บาท/วัน หรือ 4,680 บาท/ปี (อาจมีการเปลี่ยนแปลง) พร้อมค่า Wi-Fi' },
    { title: 'อุปกรณ์ครบล็อตแรก', detail: 'จัดอุปกรณ์ล็อตแรกให้พร้อมเปิดร้าน และสั่งซื้อวัตถุดิบเพิ่มจากแฟรนไชส์ได้ตลอด' },
  ],
};

export const faq = {
  heading: 'คำถามที่พบบ่อย',
  items: [
    {
      q: 'เปิดร้าน TARUKA พร้อมขายต้องเตรียมเงินลงทุนเท่าไหร่? นานแค่ไหนจะคืนทุน?',
      a: 'เงินลงทุนเริ่มต้นของ TARUKA อยู่ที่ประมาณ 200,000–250,000 บาท ซึ่งรวมค่าแฟรนไชส์ อุปกรณ์และวัตถุดิบที่กำหนดแล้ว\n\nระยะเวลาคืนทุนโดยประมาณอยู่ที่ 6–12 เดือน ทั้งนี้ขึ้นอยู่กับทำเล จำนวนลูกค้า ยอดขายต่อวัน และการบริหารต้นทุนของผู้ลงทุนแต่ละสาขา',
      highlight: '🔺 สาขาที่คืนทุนไวที่สุด ~2-3 เดือน',
    },
    {
      q: 'หลังจากเปิดมีค่าใช้จ่ายรายเดือน/รายปีอะไรไหม? หัก GP ไหม?',
      a: 'ไม่มีการหัก % จากยอดขาย ไม่หัก GP มีเพียงค่าใช้จ่ายในการต่อสัญญาปีละ 10,000 บาท',
    },
    {
      q: 'ควรเลือกทำเลแบบไหน?',
      a: '"ทำเล" สำคัญมาก เพราะเครื่องดื่มเป็นธุรกิจที่พึ่งพาจำนวนคนเดินผ่านและการซื้อซ้ำสูง',
      lists: [
        {
          icon: '📍',
          title: 'โลเคชั่นที่เหมาะกับ TARUKA',
          variant: 'rank',
          items: [
            { text: 'หน้าโรงเรียน / มหาวิทยาลัย', stars: 5 },
            { text: 'หน้าโรงงาน / แหล่งงาน', stars: 5 },
            { text: 'ตลาด / ตลาดนัด / Community Mall', stars: 5 },
            { text: 'หน้า 7-Eleven / ร้านสะดวกซื้อ / ร้านอาหาร', stars: 4 },
            { text: 'ปั๊มน้ำมัน (เลือกปั๊มที่มีรถและคนใช้บริการสูง)', stars: 4 },
          ],
        },
        {
          icon: '❌',
          title: 'ทำเลที่ควรหลีกเลี่ยง',
          variant: 'avoid',
          items: [
            { text: 'ซอยลึก คนเดินผ่านน้อย' },
            { text: 'ค่าเช่าสูงเกินยอดขายที่คาดการณ์' },
            { text: 'มีร้านชานม/กาแฟคู่แข่งติดกันหลายร้าน' },
            { text: 'ไม่มีที่จอดรถในพื้นที่ที่ลูกค้าส่วนใหญ่ขับรถ' },
            { text: 'มองเห็นร้านยาก หรือป้ายถูกบดบัง' },
            { text: 'ทำเลมีคนเยอะเฉพาะบางช่วงเวลา' },
          ],
        },
      ],
    },
  ],
};

export const contact = {
  lineUrl: 'https://line.me/R/ti/p/@taruka',
  lineLabel: '@taruka',
  facebookUrl: 'https://www.facebook.com/p/Taruka-Thailand-%E3%82%BF%E3%83%AB%E3%82%AB-100091922111471/',
  facebookLabel: 'Taruka Thailand',
  address: '93 หมู่ที่ 10 ตำบลน้ำแพร่ อำเภอหางดง จังหวัดเชียงใหม่',
  phones: ['095-447-4888', '088-252-4381'],
};

export const GA_MEASUREMENT_ID = 'G-SF1T1HE3WR';
