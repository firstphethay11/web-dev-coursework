<div align="center">

# Web Application Development
### RMUTI Computer Engineering • Coursework & Lab Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Status-Completed-success?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/badge/Repo-Private-red?style=flat-square&logo=github" alt="Private" />
  <img src="https://img.shields.io/badge/Stack-Fullstack_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="Stack" />
  <img src="https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Backend" />
  <img src="https://img.shields.io/badge/Styling-Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Databases-MongoDB%20%7C%20MySQL-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="Databases" />
</p>

<p align="center">
  คลังรวบรวมงานปฏิบัติการ (Labs), ข้อสอบภาคปฏิบัติ (Exams), และสไลด์ประกอบการเรียน<br />
  รายวิชา <b>การพัฒนาเว็บแอปพลิเคชัน (Web Application Development)</b><br />
  สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์และเทคโนโลยี มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน
</p>

</div>

---

> [!NOTE]
> **โครงงานขนาดใหญ่ (Clone Project - Louis Vuitton E-Commerce):**  
> โปรเจกต์ร้านค้าออนไลน์ระดับ Luxury (Next.js, Tailwind CSS, Express API, MongoDB) ได้รับการแยกเป็น Repository อิสระเรียบร้อยแล้ว:  
> [**firstphethay11/louis-vuitton-fullstack**](https://github.com/firstphethay11/louis-vuitton-fullstack)

---

## ผลงานและการรันภาคปฏิบัติ (Visual Showcase)

รวมภาพตัวอย่างผลลัพธ์การทำงานจริงของข้อสอบและการทดลองในห้องปฏิบัติการ

### 1. ข้อสอบกลางภาค: Responsive Landing Page (Tailwind CSS)
ออกแบบและพัฒนาหน้าเว็บไซต์แบบ Responsive สมบูรณ์แบบ รองรับทุกหน้าจอด้วย Tailwind CSS Grid และ Flexbox

| Desktop View (1280px) | Mobile Responsive (390px) |
| :---: | :---: |
| <img src="docs/screenshots/01-exam-midterm-tailwind-desktop.png" alt="Midterm Desktop" width="100%" /> | <img src="docs/screenshots/02-exam-midterm-tailwind-mobile.png" alt="Midterm Mobile" width="75%" /> |
| *Layout กว้าง คอลัมน์สมดุล ระบบ Hero & Product Cards* | *การจัดเรียงองค์ประกอบอัตโนมัติบนสมาร์ตโฟน* |

---

### 2. งานปฏิบัติการและการเชื่อมต่อ Web API (Labs & API Integration)

<table align="center" width="100%">
  <tr>
    <td width="50%" align="center" valign="top">
      <h4>Weather API Real-Time Forecast</h4>
      <img src="docs/screenshots/03-lab-weather-api.png" alt="Weather API Lab" width="100%" />
      <p align="left"><sub>ดึงข้อมูลพยากรณ์อากาศแบบเรียลไทม์ผ่าน OpenWeather API ด้วย <code>fetch()</code> แสดงอุณหภูมิ สภาพอากาศ และระดับความชื้น</sub></p>
    </td>
    <td width="50%" align="center" valign="top">
      <h4>Dynamic DOM Table & Form Validation</h4>
      <img src="docs/screenshots/04-lab-dynamic-table-form.png" alt="Dynamic Table Form Lab" width="100%" />
      <p align="left"><sub>ระบบบันทึกข้อมูลและตรวจสอบความถูกต้องของฟอร์ม (Validation) ก่อน Render ข้อมูลลงตาราง HTML แบบไดนามิก</sub></p>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center" valign="top">
      <h4>Book API & Async Data Fetcher</h4>
      <img src="docs/screenshots/05-lab-book-mock-api.png" alt="Book Mock API" width="100%" />
      <p align="left"><sub>การจัดการข้อมูลแบบ Asynchronous จำลอง REST API สำหรับสืบค้นและแสดงรายการหนังสือ</sub></p>
    </td>
    <td width="50%" align="center" valign="top">
      <h4>IoT Smart LED & Device Web Controller</h4>
      <img src="docs/screenshots/06-tool-led-controller.png" alt="IoT LED Controller" width="100%" />
      <p align="left"><sub>หน้าควบคุมฮาร์ดแวร์ IoT สวิตช์เปิด-ปิดไฟอัจฉริยะ พร้อมระบบตั้งเวลาทำงาน (Timer) และมอนิเตอร์สถานะ</sub></p>
    </td>
  </tr>
</table>

---

## แผนผังโครงสร้างโฟลเดอร์ (Directory Structure)

```
web-dev-coursework/
├── labs/                # งานปฏิบัติการและแบบฝึกหัดประจำสัปดาห์
│   ├── javascript-basic/   # พื้นฐาน JavaScript (Ex. 1-5)
│   ├── javascript-get-api/ # การดึงข้อมูลภายนอกผ่าน Fetch API
│   ├── lab8-mock-data/     # การสร้าง Mock Data และการจำลองระบบ
│   ├── week10/             # ปฏิบัติการสัปดาห์ที่ 10 (Lab 1 & 2)
│   ├── week12/             # โครงสร้าง Clean Architecture REST API
│   ├── mysql/              # การเชื่อมต่อฐานข้อมูลเชิงสัมพันธ์ MySQL
│   ├── nodejs-intro/       # การเริ่มต้นใช้งาน Node.js Runtime
│   └── book-api-lab/       # ระบบจัดการข้อมูลหนังสือเชื่อมต่อ MongoDB
│
├── exams/               # งานสอบภาคปฏิบัติ
│   ├── midterm-tailwind/   # สอบกลางภาค: หน้าเว็บ Responsive ด้วย Tailwind CSS
│   └── final-exam-api/     # สอบปลายภาค: REST API (Node.js, Express, MongoDB)
│
├── course-slides/       # สไลด์และเอกสารประกอบการบรรยาย (PDF 8 ชุด)
└── others/              # งานทดลองและสคริปต์เสริม (AI test, JS test, Web tools)
```

---

## เครื่องมือและเทคโนโลยีที่ใช้ (Tech Stack)

<div align="center">

| ประเภท | เทคโนโลยีและเครื่องมือ |
| :--- | :--- |
| **Frontend** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) ![REST API](https://img.shields.io/badge/REST-API-orange?style=flat-square) |
| **Databases** | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) |
| **Dev Tools** | ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white) |

</div>

---

## ข้อมูลผู้จัดทำ (Author)

<div align="center">

**นายจิรวัฒน์ เทียมทะนงค์ (Jirawat Thiamthanong)**  
นักศึกษาสาขาวิชาวิศวกรรมคอมพิวเตอร์ (Computer Engineering)  
คณะวิศวกรรมศาสตร์และเทคโนโลยี มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน (RMUTI)  
รหัสนักศึกษา: `66172110399-8`

[![GitHub](https://img.shields.io/badge/GitHub-firstphethay11-181717?style=flat-square&logo=github)](https://github.com/firstphethay11)

</div>
