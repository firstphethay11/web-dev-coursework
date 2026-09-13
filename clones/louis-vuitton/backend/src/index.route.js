// louisvuitton-api/src/index.route.js (เวอร์ชันที่ถูกต้อง)

import express from 'express';
import productRouter from './products/product.route.js';
import categoryRouter from './categories/category.route.js';
import cartRouter from './cart/cart.route.js';

const IndexRouter = express();

// ทุก path ไม่ต้องมี /api นำหน้า
IndexRouter.use('/products', productRouter); 
IndexRouter.use('/categories', categoryRouter);
IndexRouter.use('/cart', cartRouter);

export default IndexRouter;