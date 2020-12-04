import express from "express";
import mysql from "mysql";
import { local } from "./sqlKey.js";

const db = mysql.createPool(local);

const app = express();

app.get("/", (req, res) => {
  res.send("hellow");
});

app.listen(5000, () => {
  console.log("running on port 5000");
});
