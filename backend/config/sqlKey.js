import fs from "fs";

export const local = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "missionx",
};

export const scaleGrid = {
  host: "SG-mhqteam1-3460-master.servers.mongodirector.com",
  user: "team3",
  password: "N!@#txtGvyD5vyD5vyD5N!@#",
  database: "missionx",
  port: 3306,
  ssl: { ca: fs.readFileSync("./config//scalegrid-ca.pem") },
};