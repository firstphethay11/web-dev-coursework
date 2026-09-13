import express from 'express'
import cors from 'cors'
import RequestMiddleware from './data-request.middleware.js'

const IndexMiddleware = express()
IndexMiddleware.use(cors())
IndexMiddleware.use(express.urlencoded({ extended: true }))
IndexMiddleware.use(express.json())
IndexMiddleware.use(RequestMiddleware)

export default IndexMiddleware