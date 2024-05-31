import express from "express";
import * as sqlite from "sqlite";
import { Database } from "sqlite";
import sqlite3 from "sqlite3";
import cors from "cors";
import path from "path"; // Import the path module

let database: Database;
(async () => {
  database = await sqlite.open({
    driver: sqlite3.Database,
    filename: path.join(__dirname, "..", "database", "database.sqlite"), // Construct the correct path
  });

  await database.run("PRAGMA foreign_keys = ON");

  console.log("Ready to make database calls");
})();

const app = express();
const port = 3000;

app.use(cors()); // Use the cors middleware

app.get("/api/products", async (req, res) => {
  try {
    const products = await database.all(`
      SELECT 
        id,
        title,
        rating,
        imgSrc,
        strikeThrough,
        price
      FROM products
    `);
    res.json({ data: products });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
