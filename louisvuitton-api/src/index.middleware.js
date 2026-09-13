import express from 'express';
import cors from 'cors';

const IndexMiddleware = express();

IndexMiddleware.use(cors()); // เปิดใช้งาน CORS (ใบอนุญาตให้คุยข้ามโดเมน)
IndexMiddleware.use(express.json()); // ทำให้ Express อ่าน JSON จาก body ได้
IndexMiddleware.use(express.urlencoded({ extended: true })); // ทำให้ Express อ่านข้อมูลจากฟอร์มได้

export default IndexMiddleware;