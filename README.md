g# TARUKA Landing Page (ทารุกะ) — เว็บแฟรนไชส์

เว็บ landing page หน้าเดียวสำหรับโปรโมทแฟรนไชส์ชานมไข่มุก **TARUKA**
สร้างด้วย **React + Vite** (โครงสร้างเดียวกับที่ใช้ในโปรเจกต์ tee-jaruji-website)

🌐 **เว็บจริง (live):** <https://taruka-th.com>

- เนื้อหาทั้งหมดอยู่ใน **`src/data/siteData.js`** (แก้ข้อความ/ราคา/ตารางคืนทุน/รูปได้ที่นี่ที่เดียว)
- สี/ฟอนต์อยู่ใน **`src/styles/theme.js`**
- รูปภาพอยู่ในโฟลเดอร์ **`public/assets/`**
- โฮสต์ฟรีด้วย **Vercel**

---

## 📦 การติดตั้ง

ก่อนเริ่มต้น ต้องมี **Node.js** เวอร์ชัน 18 ขึ้นไป
[ดาวน์โหลด Node.js](https://nodejs.org/)

```bash
# 1. ติดตั้ง dependencies
npm install

# 2. รันเว็บใน development mode (เปิด browser อัตโนมัติที่ http://localhost:3000)
npm run dev

# 3. สร้างไฟล์สำหรับ deploy
npm run build

# 4. ดูตัวอย่างไฟล์ที่ build แล้ว
npm run preview
```

---

## 🧩 โครงสร้างโปรเจกต์

```
taruka-landing/
├── public/
│   ├── favicon.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── assets/               # รูปภาพทั้งหมด — โลโก้ / เมนู / สาขา / รูปแบบร้าน
├── src/
│   ├── components/           # React components — 1 ไฟล์ต่อ 1 section
│   │   ├── Navigation.jsx    # header + เมนู (มือถือเป็นดรอปดาวน์)
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx          # เมนูแบบคอลเลกชัน
│   │   ├── Highlights.jsx    # การ์ดสถิติ (นับเลขขึ้นตอนเลื่อนถึง)
│   │   ├── StoreFormats.jsx  # KIOSK / CAFE
│   │   ├── Branches.jsx      # carousel รูปสาขา
│   │   ├── Investment.jsx    # งบลงทุน
│   │   ├── ROI.jsx           # ตารางประมาณการคืนทุน (เลือก scenario ได้)
│   │   ├── Support.jsx
│   │   ├── Contact.jsx       # ช่องทางติดต่อ + ฟองไข่มุกพื้นหลัง
│   │   ├── ContactFab.jsx    # ปุ่มลอยมุมจอ (speed-dial)
│   │   ├── Footer.jsx
│   │   ├── Reveal.jsx        # scroll-reveal wrapper
│   │   ├── SectionHeading.jsx
│   │   └── Analytics.jsx     # GA4 + คลิกทุกปุ่มสำคัญ
│   ├── data/
│   │   └── siteData.js       # ⭐ เเก้ข้อมูลทุกอย่างที่นี่
│   ├── hooks/
│   │   ├── useCarousel.js
│   │   └── useCountAnimation.js
│   ├── utils/
│   │   ├── bobaSpark.js
│   │   └── contactChannels.js
│   ├── styles/
│   │   ├── theme.js          # ⭐ เเก้สี + font ที่นี่
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

> `data/` (ต้นฉบับ Canva) และ `mockups/` (ดีไซน์ทางเลือกที่ไม่ได้ใช้) ยังเก็บไว้อ้างอิง ไม่ถูก build/deploy

---

## ✏️ วิธีแก้เนื้อหา

### 1. แก้ข้อมูลทั้งหมดใน `src/data/siteData.js`

| ตัวแปร | สำหรับ |
|---|---|
| `seo` | title / description |
| `brand` | ชื่อแบรนด์ / โลโก้ / tagline |
| `hero` | หัวข้อใหญ่ / คำโปรย / ปุ่ม CTA |
| `about` | แนะนำแบรนด์ |
| `menu` | เมนูแบ่งคอลเลกชัน (โปสเตอร์ + รายการเครื่องดื่ม) |
| `highlights` | การ์ดสถิติ |
| `branches` | รูป carousel สาขา |
| `storeFormats` | KIOSK / CAFE |
| `investment` | งบลงทุน |
| `roi` | ตารางประมาณการคืนทุน |
| `support` | การสนับสนุนจากแฟรนไชส์ |
| `contact` | ลิงก์ LINE / Facebook / เบอร์โทร / ที่อยู่ |

### 2. เปลี่ยนสี + ฟอนต์ใน `src/styles/theme.js`

```js
export const colors = {
  cream: '#FFF7EC',
  orange: '#F2913D',
  matcha: '#8FB43A',
  // ...
};
```

### 3. เพิ่ม/เปลี่ยนรูป

1. เอาไฟล์รูปไปวางในโฟลเดอร์ `public/assets/`
2. ใส่ path ใน `siteData.js` แบบ absolute path เช่น `"/assets/13.jpg"`
   - โลโก้ → `brand.logoUrl`
   - รูปสาขา (carousel) → เพิ่มใน `branches.images: [...]`
   - เมนู (คอลเลกชัน) → แก้ใน `menu.categories[]`
   - รูปแบบร้าน → `storeFormats[].imageUrl`

> เคล็ดลับ: ย่อรูปก่อนวาง (กว้าง ~1000px) เพื่อให้เว็บโหลดเร็ว

---

## ☁️ การ Deploy — Vercel (แนะนำ)

```bash
npm install -g vercel
vercel login
vercel        # deploy preview
vercel --prod # deploy ขึ้น production
```

หรือเชื่อม repo GitHub นี้กับ Vercel ผ่านหน้าเว็บ [vercel.com/new](https://vercel.com/new) — Vercel จะตรวจจับว่าเป็นโปรเจกต์ Vite อัตโนมัติ (build command `npm run build`, output `dist/`) แล้ว deploy อัตโนมัติทุกครั้งที่ push ขึ้น `master`

> **ย้ายโดเมน:** โปรเจกต์นี้เพิ่งย้ายจาก Firebase Hosting มาเป็น Vercel — หลัง deploy ครั้งแรกสำเร็จ ต้องไปตั้งค่า custom domain `tarukathailand.com` / `www.tarukathailand.com` ในหน้า Vercel project settings แล้วอัปเดต DNS (nameserver หรือ A/CNAME record ตามที่ Vercel แนะนำ) เว็บเดิมบน Firebase จะยังทำงานอยู่จนกว่าจะสลับ DNS

---

## ✅ เช็กลิสต์ก่อนส่งมอบ

- [ ] ทุก section แสดงครบ โทนสี/ฟอนต์ตรงแบรนด์ และดูดีบนมือถือ
- [ ] โลโก้ + รูปสาขาแสดงถูกต้อง, carousel เลื่อน/ปัดได้
- [ ] ตัวเลขงบลงทุน/ตารางคืนทุนถูกต้องตามจริง
- [ ] ปุ่ม LINE / Facebook เด้งไปลิงก์ถูกต้อง
- [ ] `npm run build` ผ่าน แล้วเปิด URL จริงทำงานปกติ
- [ ] DNS ชี้ไปที่ Vercel แล้ว (หลังย้ายจาก Firebase)
