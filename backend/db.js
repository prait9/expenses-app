import mysql from "mysql2";
import crypto from "crypto";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwerty",
  database: "expense_app"
});

const token = crypto.randomBytes(32).toString("hex");
