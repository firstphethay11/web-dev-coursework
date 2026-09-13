import express from 'express';
import IndexConfig from './app.config.js';
import dotenv from 'dotenv'
import middleware from './middleware.js';
import appRouter from './app.route.js';

dotenv.config();

const app = express();
app.use(IndexConfig)
app.use(middleware)
app.use(appRouter)

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        date: {
            timestamp: new Date()
        }
    })
})
const PORT = 3000
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});