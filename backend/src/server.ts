import express from "express";
import * as sqlite from "sqlite";
import { Database } from "sqlite";
import sqlite3 from "sqlite3";
import cors from "cors";
import path from "path";

let database: Database;
(async () => {
  database = await sqlite.open({
    driver: sqlite3.Database,
    filename: path.join(__dirname, "..", "database", "database.sqlite"),
  });

  await database.run("PRAGMA foreign_keys = ON");

  console.log("Ready to make database calls");
})();

const app = express();
const port = 3000;

app.use(cors());

// Get request to get some info from all products
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
    res.status(200).json({ data: products });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
});

// Get request to get all info from a choosen product
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await database.get(`SELECT * FROM products WHERE id = ?`, [
      id,
    ]);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching product:", error.message);
      res.status(500).json({ error: error.message });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
