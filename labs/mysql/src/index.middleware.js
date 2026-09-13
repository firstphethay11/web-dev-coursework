import express from 'express'
import cors from 'cors'
import requestInfoMiddleware from './middleware/request-info.middleware.js'

const IndexMiddleware = express()

IndexMiddleware.use(cors())
IndexMiddleware.use(express.urlencoded({extended:true}))
IndexMiddleware.use(express.json())
IndexMiddleware.use(express.json())
IndexMiddleware.use(requestInfoMiddleware)

export default IndexMiddleware