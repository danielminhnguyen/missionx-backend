// import fs from "fs";
import express from "express";
// import mysql from "mysql2";
import userRouter from "./routes/userRouter.js";
import dotenv from "dotenv";

dotenv.config();

// const db = mysql.createPool(local);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

app.get("/api/login", (req, res) => {
  res.send("login api");
});

app.get("/", (req, res) => {
  res.send("hellow");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(5000, () => {
  console.log("running on port 5000");
});
