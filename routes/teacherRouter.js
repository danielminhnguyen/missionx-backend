import express from "express";
import expressAsyncHandler from "express-async-handler";
import db from "../connection.js";

const teacherRouter = express.Router();

teacherRouter.post(
  "/studentprofile",
  expressAsyncHandler(async (req, res) => {
    const { teacherID } = req.body;
    console.log("profile", teacherID);
    db.query(
      "SELECT `UserID`, `FirstName`, `LastName`, `ProfilePic` FROM `User` WHERE `Role` = 'student' AND `TeacherID` = ?",
      [teacherID],
      async (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(results);
        }
      }
    );
  })
);

teacherRouter.post(
  "/helprequest",
  expressAsyncHandler(async (req, res) => {
    const { teacherID } = req.body;
    console.log("profile", teacherID);
    db.query(
      "SELECT `User`.`UserID`, `User`.`FirstName`, `User`.`LastName`, `User`.`ProfilePic`, `User`.`TeacherID`, `User`.`Role`, `User`.`Gender`, `HelpRequest`.`Done`, `HelpRequest`.`DateCreated` FROM `missionx`.`User` , `missionx`.`HelpRequest` WHERE `User`.`UserId` = `HelpRequest`.`UserId` AND `User`.`TeacherID` = ?",
      [teacherID],
      async (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(results);
        }
      }
    );
  })
);

export default teacherRouter;
