import express from 'express';
import IndexMiddleware from './src/middleware/index.middleware.js';
import IndexConfig from './src/middleware/index.config.js';


const app = express();
app.use(IndexMiddleware)
app.use(IndexConfig)



app.get("/", (req, res) => {
res.status(200).type('text/plain').send(`Hello MogoDB: ${new Date()}`) ;
});


const PORT = 3333
app.listen(PORT, () => {
    console.log("Open on PORT: 3333")
    console.log(`http://localhost:${PORT}`);

});








