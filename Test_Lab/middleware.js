import express from "express"
import cors from 'cors'
import { request } from "express";
import logger from "./request.info.js";

const middleware = express();

middleware.use(cors())
middleware.use(logger)
middleware.use(express.json())
middleware.use(express.urlencoded({extended:true}))

export default middleware