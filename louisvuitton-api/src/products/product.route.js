import express from 'express';
import productController from './product.controller.js';
import { createValidator } from 'express-joi-validation';
import createProductDto from './create-product.dto.js';

const productRouter = express.Router();
const validator = createValidator();

productRouter.post('/', validator.body(createProductDto), productController.addProduct);
productRouter.get('/', productController.showAllProducts);
productRouter.get('/:id', productController.showProductById);

// ✅ เพิ่ม Update และ Delete
productRouter.put('/:id', validator.body(createProductDto), productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);

export default productRouter;
