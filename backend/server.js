// import fs from "fs";
import express from "express";
// import mysql from "mysql2";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import teacherRouter from "./routes/teacherRouter.js";
import projectRouter from "./routes/projectRouter.js";

dotenv.config();

// const db = mysql.createPool(local);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/teachers", teacherRouter);
app.use("/api/projects", projectRouter);

app.get("/api/login", (req, res) => {
  res.send("login api");
});

app.get("/", (req, res) => {
  res.send("hellow");
});

app.listen(5000, () => {
  console.log("running on port 5000");
});
