import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { database } from "../config/db-config.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schemaFile = path.join(__dirname, "db_schema.sql");

async function runSchema() {
  // Check if file exists
  if (!fs.existsSync(schemaFile)) {
    console.error("❌ schema-db.sql not found at:", schemaFile);
    return;
  }

  // Read the SQL file
  const schemaContent = fs.readFileSync(schemaFile, "utf8").trim();

  if (!schemaContent) {
    console.warn("⚠️ db_schema.sql is empty!");
    return;
  }

  // Split statements by semicolon, but handle semicolons in strings or comments
  const statements = schemaContent
    .split(/;\s*(?=(?:[^'"]|'[^']*'|"[^"]*")*$)/)
    .map((s) => s.trim())
    .filter(Boolean);

  console.log(`ℹ️ Found ${statements.length} SQL statement(s) to execute.`);

  for (let i = 0; i < statements.length; i++) {
    const sql = statements[i]!;
    try {
      console.log(`➡️ Executing statement #${i + 1}:`, sql);
      await database.query(sql);
      console.log(`✅ Statement #${i + 1} executed successfully.`);
    } catch (err: any) {
      console.error(`❌ Failed to execute statement #${i + 1}:`, err.message);
      throw err;
    }
  }
}

(async () => {
  try {
    await runSchema();
    console.log("🎉 All SQL statements executed successfully!");
  } catch (err: any) {
    console.error("❌ Migration failed:", err.message);
    process.exit(1); // exit with error code only if something failed
  } finally {
    // Close the database pool gracefully
    await database.end();
  }
})();
