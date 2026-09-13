import express from 'express';
import { log } from './log.js';

const IndexMiddleware = express();

IndexMiddleware.use(express.urlencoded({extended:true}))
IndexMiddleware.use(express.json())
IndexMiddleware.use(log)    

export default IndexMiddleware