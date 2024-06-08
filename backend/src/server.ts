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

// Use CORS/JSON middleware globally
app.use(cors());
app.use(express.json());

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

// POST handels the login process
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if the user exists with the provided email and password
    const result = await database.get(
      "SELECT * FROM accounts WHERE email = ? AND password = ?",
      [email, password]
    );
    if (result) {
      res.status(200).send("Login successful!");
    } else if (email === undefined || password === undefined) {
      res.status(400).send("Email or password is missing!");
    } else {
      res.status(401).send("Invalid login info!");
    }
  } catch (error) {
    // Handle unexpected errors
    res.status(500).send("An error occurred.");
  }
});

// POST handels the create account process

// Set the structure of the req.body object, sent form the user.
interface AccountInfo {
  email: string;
  password: string;
}

let storeArray: AccountInfo[] = [];

app.post("/create-account", async (req, res) => {
  try {
    const { email, password } = req.body as AccountInfo;

    // Check if the email value exists in the array
    const emailExists = storeArray.some(
      (accountInfo) => accountInfo.email === email
    );

    await database.run("INSERT INTO cities (name, population) VALUES (?, ?)", [
      email,
      password,
    ]);

    // Add new account if email is unique and both Values are present
    if (!emailExists && email && password) {
      await database.run(
        "INSERT INTO accounts (email, password) VALUES (?, ?)",
        [email, password]
      );
      res.status(201).send("Ett nytt konto har skapats"); // Send a confirmation message
    } else if (!email || !password) {
      // If the request lacks 'email' or 'password', send a 400
      res.status(400).send("Email eller lösenord saknas, pröva igen");
    } else if (emailExists && email && password) {
      // If the email does exist in the storeArray & the request includes an 'email' & 'password', send a 409
      res.status(409).send("Ett konto med detta email finns redan pröva igen!");
    }
  } catch (error) {
    // Handle unexpected errors
    res.status(500).send("An error occurred.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
