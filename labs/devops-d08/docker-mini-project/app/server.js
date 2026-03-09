const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  host: "db",
  user: "devops",
  password: "devops",
  database: "devopsdb",
  port: 5432
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Hello from Docker + Node + PostgreSQL ",
      time: result.rows[0],
    });
  } catch (err) {
    res.send(err.toString());
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
