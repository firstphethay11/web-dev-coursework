import express from "express";

const app = express();
const PORT = 5111;

// เส้นทาง GET /
app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("Home");
});

// เส้นทาง GET /about
app.get("/about", (req, res) => {
  res.type("text/html");
  res.send("<h1>About</h1>");
});

// เส้นทางอื่น ๆ (404 Not Found)
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

// เริ่ม server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});