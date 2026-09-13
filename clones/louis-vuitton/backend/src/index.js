// louisvuitton-api/src/index.js (เวอร์ชันที่ถูกต้อง)

import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import IndexConfig from './index.config.js';
import IndexMiddleware from './index.middleware.js';
import IndexRouter from './index.route.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(IndexConfig);
app.use(IndexMiddleware); 

// กำหนดให้ทุก Route ที่มาจาก IndexRouter ต้องผ่าน '/api' ก่อน
app.use('/api', IndexRouter); 

const frontendDir = process.env.FRONTEND_DIR || fileURLToPath(new URL('../../PROJECT LOUIS VUITTON/', import.meta.url));
app.get('/', (_req, res) => res.sendFile(path.join(frontendDir, 'index.html')));
for (const directory of ['CSS', 'js', 'img']) {
    app.use(`/${directory}`, express.static(path.join(frontendDir, directory)));
}

const server = app.listen(port, () => {
    console.log(`Node.js server listening on port ${port}`);
    const url = `http://localhost:${server.address().port}`;
    console.log(`Website: ${url}`);
    if (process.argv.includes('--open') && process.platform === 'win32') {
        execFile('explorer.exe', [url], (error) => {
            if (error) console.log(`Open your browser at ${url}`);
        });
    }
});
server.on('error', (error) => {
    console.error(error.code === 'EADDRINUSE'
        ? `Port ${port} is already in use. Close the previous server before starting again.`
        : `Server failed: ${error.message}`);
    process.exit(1);
});
