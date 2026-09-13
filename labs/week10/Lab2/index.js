import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = 4000;

app.get("/page", (req, res) => {
    const filePath = path.join(__dirname, "html", "abot.html");

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err); 
            res.status(500);
            res.type("text/plain; charset=utf-8");
            res.send("อ่านไฟล์ไม่ได้");
        } else {  
            const content = data + "\nส่งมาจาก res.sendFile()";
            res.status(200);  
            res.type("text/html; charset=utf-8");
            res.send(content);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
