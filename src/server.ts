import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from API");
});

const PORT = process.env.PORT || 4455;

const server = app.listen(PORT, () => {
  console.log(`Server running on 🗿 http://localhost:${PORT}`);
});
