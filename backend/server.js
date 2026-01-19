const express = require("express");
const { Client } = require("pg");

const app = express();
const PORT = process.env.PORT || 8080;

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false }
});

client.connect();

app.get("/api/hello", async (req, res) => {
  const result = await client.query("SELECT NOW()");
  res.json({
    message: "Hello from Backend 🚀.",
    db_time: result.rows[0].now
  });
});

app.listen(PORT, () => console.log("Backend running"));
