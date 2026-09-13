import express from 'express'
import ProductRouter from './product.route.js';
const IndexRouter = express();
IndexRouter.use('/product',ProductRouter)
export default IndexRouter