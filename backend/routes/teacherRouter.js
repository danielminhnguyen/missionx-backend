import expressAsyncHandler from "express-async-handler";

import express from "express";
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

teacherRouter.post(
  "/progressbeginner",
  expressAsyncHandler(async (req, res) => {
    const { teacherID } = req.body;
    console.log("profile", teacherID);
    db.query(
      "SELECT * FROM (SELECT DISTINCT `ProgressHistory`.`UserID`, GROUP_CONCAT(`ProgressHistory`.`ProjectID`) AS `Beginner` FROM `missionx`.`ProgressHistory` WHERE `ProjectID` <= 15 AND `DateSubmitted` IS NOT NULL  GROUP BY `UserID`) AS A JOIN (SELECT `User`.`UserID`, `User`.`FirstName`, `User`.`LastName` FROM `missionx`.`User` WHERE  `User`.`TeacherID` = ?) AS B ON A.`UserID` = B.`UserID`;",
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
  "/progressbeginner",
  expressAsyncHandler(async (req, res) => {
    const { teacherID } = req.body;
    db.query(
      "SELECT * FROM (SELECT DISTINCT `ProgressHistory`.`UserID`, GROUP_CONCAT(`ProgressHistory`.`ProjectID`) AS `Beginner` FROM `missionx`.`ProgressHistory` WHERE `ProjectID` <= 15 AND `DateSubmitted` IS NOT NULL  GROUP BY `UserID`) AS A JOIN (SELECT `User`.`UserID`, `User`.`FirstName`, `User`.`LastName` FROM `missionx`.`User` WHERE  `User`.`TeacherID` = ?) AS B ON A.`UserID` = B.`UserID`",
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
  "/progressintermediate",
  expressAsyncHandler(async (req, res) => {
    const { teacherID } = req.body;
    db.query(
      "SELECT * FROM (SELECT DISTINCT `ProgressHistory`.`UserID`, GROUP_CONCAT(`ProgressHistory`.`ProjectID`) AS `Intermediate` FROM `missionx`.`ProgressHistory` WHERE `ProjectID` BETWEEN 16 AND 30 AND `DateSubmitted` IS NOT NULL  GROUP BY `UserID`) AS A JOIN (SELECT `User`.`UserID`, `User`.`FirstName`, `User`.`LastName` FROM `missionx`.`User` WHERE  `User`.`TeacherID` = ?) AS B ON A.`UserID` = B.`UserID`",
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
  "/progressadvance",
  expressAsyncHandler(async (req, res) => {
    const { teacherID } = req.body;
    db.query(
      "SELECT * FROM (SELECT DISTINCT `ProgressHistory`.`UserID`, GROUP_CONCAT(`ProgressHistory`.`ProjectID`) AS `Advanced` FROM `missionx`.`ProgressHistory` WHERE `ProjectID` > 31 AND `DateSubmitted` IS NOT NULL  GROUP BY `UserID`) AS A JOIN (SELECT `User`.`UserID`, `User`.`FirstName`, `User`.`LastName` FROM `missionx`.`User` WHERE  `User`.`TeacherID` = ?) AS B ON A.`UserID` = B.`UserID`",
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
