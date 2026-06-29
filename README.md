# TARUKA Landing Page (ทารุกะ) — เว็บแฟรนไชส์

เว็บ landing page หน้าเดียวสำหรับโปรโมทแฟรนไชส์ชานมไข่มุก **TARUKA**
เป็น **เว็บ static ล้วน** — แก้เนื้อหาทั้งหมดในไฟล์โค้ดไฟล์เดียว แล้ว deploy

🌐 **เว็บจริง (live):** <https://tarukathailand.com>

- เนื้อหาทั้งหมดอยู่ใน **`default-content.js`** (แก้ข้อความ/ราคา/ตารางคืนทุน/รูปได้ที่นี่ที่เดียว)
- รูปภาพอยู่ในโฟลเดอร์ **`assets/`**
- โฮสต์ฟรีด้วย **Firebase Hosting** (ไม่ใช้ฐานข้อมูล/ล็อกอิน)

---

## 🧩 โครงสร้างไฟล์

| ไฟล์/โฟลเดอร์ | หน้าที่ |
|---|---|
| `index.html` | หน้าเว็บ (โครง HTML + CSS + JS ที่อ่าน `default-content.js` มาแสดง) |
| `default-content.js` | **เนื้อหาทั้งหมด** — แก้ที่นี่ที่เดียว (ข้อความ/ราคา/ตาราง/ลิงก์รูป/LINE/Facebook) |
| `assets/` | รูปภาพ — โลโก้ (`logo.png`) + รูปสาขา (`1.jpg`…`12.jpg`) |
| `data/` | ไฟล์ต้นฉบับ (Canva + รูปต้นฉบับ) — เก็บไว้อ้างอิง ไม่ถูก deploy |
| `firebase.json` | ตั้งค่า Firebase Hosting |
| `.firebaserc` | ผูกกับ Firebase project id (สำหรับ deploy) |

---

## ✏️ วิธีแก้เนื้อหา

เปิดไฟล์ **`default-content.js`** แล้วแก้ค่าในนั้นได้เลย เช่น

- **ข้อความ/ราคา/งบลงทุน/ตารางคืนทุน** — แก้ที่ object `investment`, `roi`, `support` ฯลฯ
- **ลิงก์ติดต่อ** — แก้ `contact.lineUrl` / `contact.facebookUrl`
- **รูปภาพ** — วาง path รูปใน `assets/` เช่น `"assets/1.jpg"` หรือใส่ URL เต็มจากเว็บอื่นก็ได้

### เพิ่ม/เปลี่ยนรูป
1. เอาไฟล์รูปไปวางในโฟลเดอร์ `assets/`
2. ใส่ path ใน `default-content.js`:
   - โลโก้ → `brand.logoUrl`
   - รูปสาขา (carousel) → เพิ่มใน `branches.images: [...]`
   - เมนู (คอลเลกชัน) → แก้ใน `menu.categories[]` (รูป `image`, ชื่อหมวด `nameTh`, รายการ `items` พร้อมราคา)
   - รูปแบบร้าน → `storeFormats[].imageUrl`
   - พื้นหลัง Hero → `hero.bgImageUrl`

> เคล็ดลับ: ย่อรูปก่อนวาง (กว้าง ~1000px) เพื่อให้เว็บโหลดเร็ว

---

## 💻 ดูบนเครื่อง (local)

เปิดผ่าน web server (ดับเบิลคลิกไฟล์ตรง ๆ ก็ได้ แต่ผ่าน server จะตรงกับของจริงกว่า):

```bash
npx serve .
```
แล้วเปิด `http://localhost:3000`

---

## ☁️ Deploy ขึ้นเว็บจริง (Firebase Hosting — ฟรี)

ตั้งค่าเสร็จแล้ว — `.firebaserc` ผูกกับ project **`taruka-fbe28`** และ deploy ขึ้น <https://tarukathailand.com> แล้ว

**อัปเดตเว็บครั้งต่อไป** (หลังแก้ `default-content.js` หรือโค้ด):
```bash
firebase deploy --only hosting
```

<details>
<summary>ตั้งค่าเครื่องใหม่ตั้งแต่ต้น (ถ้าย้ายเครื่อง)</summary>

```bash
npm i -g firebase-tools
firebase login            # เปิดเบราว์เซอร์ให้ล็อกอินบัญชี Google ที่เป็นเจ้าของ project
firebase deploy --only hosting
```
แผน Spark ฟรีพอ — **ไม่ต้องเปิด Firestore/Auth/Storage** (เว็บเป็น static ล้วน)
</details>

---

## ✅ เช็กลิสต์ก่อนส่งมอบ

- [ ] ทุก section แสดงครบ โทนสี/ฟอนต์ตรงแบรนด์ และดูดีบนมือถือ
- [ ] โลโก้ + รูปสาขาแสดงถูกต้อง, carousel เลื่อน/ปัดได้
- [ ] ตัวเลขงบลงทุน/ตารางคืนทุนถูกต้องตามจริง
- [ ] ปุ่ม LINE / Facebook เด้งไปลิงก์ถูกต้อง
- [ ] `firebase deploy` แล้วเปิด URL จริงทำงานปกติ
