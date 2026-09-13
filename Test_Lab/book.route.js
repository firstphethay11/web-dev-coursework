import express from 'express';
import { createValidator } from 'express-joi-validation';
import bookController from './book.controll.js';  // 
import { CreatebookDto } from './create.book.dto.js';

const bookRouter = express.Router();
const validator = createValidator(); //

bookRouter.post('/', validator.body(CreatebookDto), bookController.createbook);

export default bookRouter;
