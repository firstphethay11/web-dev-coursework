import express from 'express';
import IndexMiddleware from './index.middleware.js';
import IndexConfig from './index.config.js';
import IndexRouter from './index.route.js'
const app = express();

app.use(IndexConfig);
app.use(IndexMiddleware);
app.use(IndexRouter);
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      timestamp: new Date()
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
