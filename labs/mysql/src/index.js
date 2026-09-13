import express from 'express';
import dotenv from 'dotenv';
import IndexMiddleware from './index.middleware.js';
import IndexConfig from './index.config.js';

dotenv.config(); // โหลด .env ก่อนใช้งาน process.env

const app = express();

// Middleware
app.use(IndexMiddleware);

// Config อื่น ๆ
app.use(IndexConfig);

// Route ทดสอบ
app.get('/', (req, res) => {
  res.status(200).send("Hello test!!!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
