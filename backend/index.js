import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vijay@14102003",
  database: "contact_db",
});

// Connect to DB
db.connect((err) => {
  if (err) {
    console.error("DB connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// API route
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  const sql =
    "INSERT INTO contact_query (name, email, subject, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, subject, message], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Message stored successfully" });
  });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
