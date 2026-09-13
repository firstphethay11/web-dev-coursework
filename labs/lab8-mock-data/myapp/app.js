import express from "express";
import cors from "cors";
import IndexMiddleware from "./middleware.js";
import IndexRouter from "./book.route.js";


const app = express();
app.use(cors());
const PORT = 3000;

app.use(IndexMiddleware)
app.use(IndexRouter)


app.get('/',(req,res)=>{
    res.status(200).json({
        success: true,
        sayhi: "hello node js",
        method: "Get",
        url: "/", 
    })
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
