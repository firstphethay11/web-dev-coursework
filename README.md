# 🌐 Web Application Development Repository

<p align="center">
  <img src="https://img.shields.io/badge/Visibility-Private_Repository-critical?style=for-the-badge&logo=github" alt="Private Repo" />
  <img src="https://img.shields.io/badge/Owner-firstphethay11-181717?style=for-the-badge&logo=github" alt="Owner" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
</p>

คลังจัดเก็บและรวบรวมผลงานการพัฒนาเว็บแอปพลิเคชัน จัดหมวดหมู่อย่างเป็นระเบียบ แบ่งตาม **งาน Clone**, **งาน Lab ปฏิบัติการ**, **งานสอบ (Exams)**, **สไลด์การเรียน**, และ **งานอื่นๆ** ในหลักสูตรวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน (RMUTI)

> 🔒 **หมายเหตุความเป็นส่วนตัว (Privacy):**  
> Repository นี้ตั้งค่าสถานะเป็น **Private (ส่วนตัว)** เพื่อความปลอดภัยของข้อมูลการเรียน และรหัสเชื่อมต่อฐานข้อมูล

---

## 📂 สารบัญแยกตามหมวดหมู่ (Categorized Workspace)

```
Website/
├── 🛍️ clones/              # โครงงานประเภทงานโคลนเว็บไซต์ (Clone Projects)
├── 🧪 labs/                # งานปฏิบัติการและแบบฝึกหัดประจำสัปดาห์ (Laboratories)
├── 📝 exams/               # โปรเจกต์สำหรับการสอบกลางภาคและปลายภาค (Examinations)
├── 📚 course-slides/       # สไลด์เอกสารประกอบการเรียน (PDF Lecture Slides)
└── ⚙️ others/              # สคริปต์ทดสอบและงานทดลองอื่นๆ (Other Tools & Scripts)
```

---

### 🛍️ 1. หมวดงาน Clone (`clones/`)

- [**`clones/louis-vuitton/`**](./clones/louis-vuitton)  
  **Louis Vuitton E-Commerce Web Simulation (Full-Stack)**  
  โครงงานจำลองร้านค้าแบรนด์เนมหรูหราครบวงจร พร้อมระบบสั่งการ API หลังบ้าน
  - [🌐 **`frontend/`**](./clones/louis-vuitton/frontend): หน้าบ้าน (HTML5, CSS3, Vanilla JS) รองรับ Responsive ทุกขนาดหน้าจอ
  - [⚙️ **`backend/`**](./clones/louis-vuitton/backend): ระบบหลังบ้าน RESTful API ด้วย Express และ MySQL
  - [📸 **`screenshots/`**](./clones/louis-vuitton/screenshots): **ภาพถ่ายหน้าจอจริง** ทั้งมุมมอง Desktop, Tablet และ Mobile Responsive
  - [📑 **`docs/`**](./clones/louis-vuitton/docs): เล่มรายงานโครงงานฉบับสมบูรณ์ (Word docx) และสไลด์นำเสนอ (PDF)
  - ⚠️ *หมายเหตุ: โครงงานนี้จัดทำขึ้นเพื่อการศึกษาเท่านั้น มิได้มีเจตนาเพื่อการค้าแต่อย่างใด*

---

### 🧪 2. หมวดงาน Lab ปฏิบัติการ (`labs/`)

- [**`labs/javascript-basic/`**](./labs/javascript-basic): แบบฝึกหัดปูพื้นฐานการเขียนโปรแกรมด้วยภาษา JavaScript (แบบฝึกหัด 1 ถึง 5)
- [**`labs/javascript-get-api/`**](./labs/javascript-get-api): การใช้งาน Fetch API เพื่อดึงข้อมูลจาก Web Service ภายนอก
- [**`labs/lab8-mock-data/`**](./labs/lab8-mock-data): ปฏิบัติการที่ 8 การสร้าง Mock Data และการจำลองระบบ
- [**`labs/week10/`**](./labs/week10): งานปฏิบัติการประจำสัปดาห์ที่ 10 (Lab 1 และ Lab 2)
- [**`labs/week12/`**](./labs/week12): สถาปัตยกรรม REST API มาตรฐานสากล (Controller, Service, Route, DTO, Mongoose Schema)
- [**`labs/mysql/`**](./labs/mysql): การเขียนโปรแกรมเชื่อมต่อและจัดการฐานข้อมูล MySQL ผ่าน Node.js
- [**`labs/nodejs-intro/`**](./labs/nodejs-intro): การเริ่มต้นสร้าง HTTP Server ด้วย Node.js
- [**`labs/book-api-lab/`**](./labs/book-api-lab): ระบบจัดการหนังสือ (Book Management API) เชื่อมต่อ MongoDB

---

### 📝 3. หมวดงานสอบ (`exams/`)

- [**`exams/midterm-tailwind/`**](./exams/midterm-tailwind):  
  **การสอบกลางภาค (Midterm Exam):** ออกแบบและพัฒนาหน้าเว็บตามโจทย์ที่กำหนดโดยใช้ **Tailwind CSS** แบบ Responsive
- [**`exams/final-exam-api/`**](./exams/final-exam-api):  
  **การสอบปลายภาค (Final Exam):** พัฒนาระบบ REST API ด้วย **Node.js**, **Express** และฐานข้อมูลบนคลาวด์ **MongoDB Atlas**

---

### 📚 4. หมวดสไลด์ประกอบการเรียน (`course-slides/`)

- [**`course-slides/`**](./course-slides): รวบรวมสไลด์บรรยายประกอบการเรียนตลอดทั้งวิชา:
  - `06-JavaScript_basic.pdf`
  - `07-Javascript_API.pdf`
  - `08-Node.jsครั้ง1เปลี่ยนเนื้อหา.pdf`
  - `09-Node.jsครั้ง2เปลี่ยนเนื้อหา.pdf`
  - `09-MongoDB.pdf`
  - `09-การเชิ่อมต่อฐานข้อมูล MySQL_ปรับปรุง.pdf`
  - `10-ติดต่อMongoDB-ปรับปรุง.pdf`
  - `11-การใช้ MySQLเบื้องต้น.pdf`

---

### ⚙️ 5. หมวดงานอื่นๆ (`others/`)

- [**`others/ai-test/`**](./others/ai-test): การทดสอบฟังก์ชันประมวลผลและการจัดส่งข้อมูล
- [**`others/test-js/`**](./others/test-js): พื้นที่ทดสอบตรรกะ JavaScript เบื้องต้น
- [**`others/tool-tammakoi/`**](./others/tool-tammakoi): แบบทดสอบและเครื่องมือประยุกต์เพิ่มเติม

---

## 👤 ข้อมูลผู้จัดทำ (Author)

- **นายจิรวัฒน์ เทียมทะนงค์ (Jirawat Thiamthanong)**
- รหัสนักศึกษา: 66172110399-8  
- สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์และเทคโนโลยี  
  มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน (RMUTI)  
- **GitHub:** [@firstphethay11](https://github.com/firstphethay11)
