import fs from "fs";
import mysql from "mysql2";

export const local = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "missionx",
};

let certificate;
try {
  certificate = fs.readFileSync("./config/scalegrid.pem");
} catch (error) {
  console.log("Error:", error);
}

export const scaleGrid = {
  host: "SG-mhqteam1-3460-master.servers.mongodirector.com",
  user: "team3",
  password: "N!@#txtGvyD5vyD5vyD5N!@#",
  database: "missionx",
  port: 3306,
  ssl: { ca: certificate },
};

const db = mysql.createConnection(local);

export default db;
