import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const database = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "pos_user",
  password: process.env.DB_PASS || "MyRoot@2026",
  database: process.env.DB_NAME || "1965_db",
  port: Number(process.env.DB_PORT || 4455),
});

(async () => {
  try {
    const [rows] = await database.query("SELECT 1");
    console.log("➡️ Database connected! 🎉", rows);
  } catch (err: any) {
    console.error("❌ Database connection error:", err.message);
    process.exit(1);
  }
})();
