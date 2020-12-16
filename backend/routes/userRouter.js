import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import db from "../connection.js";
import { generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const { email, password, role } = req.body;
    // const { password } = req.body;
    // const { role } = req.body;
    console.log("email", email);
    console.log("password", password);
    if (email && password) {
      db.query(
        "Select * FROM `mhq3`.`User` WHERE `Email` = ? AND `Role` = ?",
        [email, role],
        async (err, results) => {
          if (err) {
            console.log(err);
          } else if (results.length === 1 && bcrypt.compareSync(password, results[0].Password)) {
            const encoding = "base64";
            const uri = `data:${results[0].MimeType};${encoding},${results[0].ProfilePic}`;

            res.status(200).send({
              UserID: results[0].UserID,
              FirstName: results[0].FirstName,
              LastName: results[0].LastName,
              Role: results[0].Role,
              ProfilePic: uri,
              token: generateToken(results[0]),
            });
          } else {
            res.status(401).send({ message: "invalid email or password" });
          }
        }
      );
    } else {
      res.status(401).send({ message: "invalid POST string" });
    }
  })
);

userRouter.post("/register", async (req, res) => {
  const { firstname, lastname, email, role } = req.body;
  const password = await bcrypt.hashSync(req.body.password, 8);
  if (email && email) {
    db.query(
      "INSERT INTO `User` (`FirstName`,`LastName`,`Email`,`Password`,`Role`) VALUES ? , ? , ? , ? , ?",
      [firstname, lastname, email, password, role],
      (err) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send({
            FirstName: firstname,
            LastName: lastname,
            Role: role,
            ProfilePic: null,
            token: generateToken(firstname),
          });
          console.log("successfull created user");
        }
      }
    );
  }
  res.end();
});

export default userRouter;
