import express from 'express'
import bookRouter from './book.route.js'
const appRouter = express();
appRouter.use('/book',bookRouter)
export default appRouter