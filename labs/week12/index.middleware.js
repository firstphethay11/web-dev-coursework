import express from 'express'
import cors from 'cors'
import RequestMiddleware from './request-info.middleware.js'
const IndexMiddleware = express()
IndexMiddleware.use(cors())
IndexMiddleware.use(RequestMiddleware)
IndexMiddleware.use(express.urlencoded({extended:true}))
IndexMiddleware.use(express.json())

export default IndexMiddleware
