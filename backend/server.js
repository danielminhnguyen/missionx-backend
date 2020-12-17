// import fs from "fs";
import express from "express";
// import mysql from "mysql2";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import teacherRouter from "./routes/teacherRouter.js";
import projectRouter from "./routes/projectRouter.js";
import studentRouter from "./routes/studentRouter.js";

dotenv.config();

// const db = mysql.createPool(local);
// export sql db
// https://github.com/drud/ddev/issues/1902
// sed -i '' 's/utf8mb4_0900_ai_ci/utf8mb4_unicode_ci/g' 2019-10-26-prod.sql

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/teachers", teacherRouter);
app.use("/api/projects", projectRouter);
app.use("/api/students", studentRouter);

app.get("/api/login", (req, res) => {
  res.send("login api");
});

app.get("/", (req, res) => {
  res.send("hellow");
});

const port = Number(process.env.PORT || 5000);

app.listen(port, () => console.log(`🚀 Server running on port ${port}!`));
