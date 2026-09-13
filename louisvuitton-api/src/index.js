// louisvuitton-api/src/index.js (เวอร์ชันที่ถูกต้อง)

import 'dotenv/config';
import express from 'express';
import IndexConfig from './index.config.js';
import IndexMiddleware from './index.middleware.js';
import IndexRouter from './index.route.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(IndexConfig);
app.use(IndexMiddleware); 

// กำหนดให้ทุก Route ที่มาจาก IndexRouter ต้องผ่าน '/api' ก่อน
app.use('/api', IndexRouter); 

app.listen(port, () => {
    console.log(`Node.js server listening on port ${port}`);
});