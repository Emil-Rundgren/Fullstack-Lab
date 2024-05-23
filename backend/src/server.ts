import express from "express";
import * as sqlite from "sqlite";
import { Database } from "sqlite";
import sqlite3 from "sqlite3";
import axios from "axios"; // Import axios to fetch images from URLs
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

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(
    `${req.method} request for '${req.url}' with query parameters:`,
    req.query
  );
  next();
});

// Endpoint to get an image
app.get("/image", async (req, res) => {
  try {
    const imageId = req.query.id; // Assume the image ID is passed as a query parameter
    if (!imageId) {
      console.error("Image ID is required");
      res.status(400).send("Image ID is required");
      return;
    }

    console.log(`Received request for image ID: ${imageId}`);
    const imageRow = await database.get(
      "SELECT imgSrc FROM products WHERE id = ?",
      [imageId]
    );

    console.log(`Database query result: ${JSON.stringify(imageRow)}`);
    if (!imageRow) {
      console.error("Image not found in database");
      res.status(404).send("Image not found");
      return;
    }

    const imageUrl = imageRow.imgSrc; // Ensure this matches the column name in your database
    console.log(`Image URL retrieved from database: ${imageUrl}`);

    // Fetch the image from the URL
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const imageBuffer = Buffer.from(response.data, "binary");

    console.log(
      `Image buffer fetched successfully, length: ${imageBuffer.length}`
    );

    res.writeHead(200, {
      "Content-Type": response.headers["content-type"],
      "Content-Length": imageBuffer.length,
    });
    res.end(imageBuffer);
  } catch (error) {
    console.error("Error while processing request:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
