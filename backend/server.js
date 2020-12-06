import fs from "fs";
import express from "express";
import mysql from "mysql2";
import { local, scaleGrid } from "./config/sqlKey.js";

const db = mysql.createPool(local);

const app = express();

app.get("/api/login", (req, res) => {
  res.send("login api");
});

app.get("/", (req, res) => {
  res.send("hellow");
});

app.listen(5000, () => {
  console.log("running on port 5000");
});
