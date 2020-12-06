import React, { useState } from "react";
import "./ModalLoginSignup.scss";
import { Link } from "react-router-dom";
import student from "assets/images/modal-student.png";
import teacher from "assets/images/modal-teacher.png";
import { Button, Dialog, Grid, TextField, Typography } from "@material-ui/core";
import Tabs from "components/Tabs";
import useStyles from "./styles";
import { useStateValue } from "StateProvider";

// import teacher from "@images/modal-teacher.png";

export default function ModalLoginSignup({ show, request, close }) {
  const classes = useStyles();
  // const [state, dispatch] = useStateValue();
  // const [fullName, setFullName] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  // const [repeatPassword, setRepeatPassword] = useState(null);
  const [value, setValue] = useState({
    fullName: null,
    email: null,
    password: null,
    repeatPassword: null,
  });

  const formValidate = () => {};

  const inputHandleChange = (item) => (event) => {
    console.log(event.target.value);
    setValue(...value, ([item]: event.target.value));
  };

  const signUp = () => {};

  const logIn = () => {
    console.log(value.email);
  };

  return (
    <Dialog
      // fullWidth="sm"
      maxWidth
      className={classes.dialogContainer}
      open={show}
      onClose={close}
    >
      <Grid container spacing={4}>
        <Grid item xs={6} className="column">
          <div className="login-signup-switch">
            <img className={classes.image} src={student} alt="" />
            <Typography variant="h4">Students</Typography>
            <Tabs setactive={request}>
              <div label="Login">
                <TextField
                  value={value.email}
                  variant="outlined"
                  type="email"
                  onChange={inputHandleChange("email")}
                  placeholder="email"
                ></TextField>
                <input
                  value={value.email}
                  type="email"
                  name=""
                  id=""
                  onChange={inputHandleChange("email")}
                  placeholder="email"
                />
                <input
                  value={value.password}
                  type="password"
                  name=""
                  placeholder="password"
                  id=""
                />
                <Link to="/students" onClick={() => close()}>
                  <Button variant="contained" color="secondary" onClick={logIn}>
                    Login
                  </Button>
                </Link>
              </div>
              <div label="Sign Up">
                <input
                  value={value.fullName}
                  type="fullname"
                  name=""
                  id=""
                  placeholder="fullname"
                />
                <input value={value.email} type="email" name="" id="" placeholder="email" />
                <input
                  value={value.password}
                  type="password"
                  name=""
                  id=""
                  placeholder="password"
                />
                <input
                  value={value.repeatPassword}
                  type="confirm"
                  name=""
                  id=""
                  placeholder="confirm password"
                />
                <Link to="/students" onClick={() => close()}>
                  <Button variant="contained" color="secondary" onClick={signUp}>
                    Sign Up
                  </Button>
                </Link>
              </div>
            </Tabs>
          </div>
        </Grid>
        <Grid className="column" item xs={6}>
          <img className={classes.image} src={teacher} alt="" />
          <div className="login-signup-switch">
            <Typography variant="h4">Teachers</Typography>
            <Tabs setactive={request}>
              <div label="Login">
                <input type="email" name="" id="" placeholder="email" />
                <input type="password" name="" placeholder="password" id="" />
                {/* <Link to="/teachers" onClick={() => close()}> */}
                <Button onClick={logIn} variant="contained" color="secondary">
                  Login
                </Button>
                {/* <button className="button-one">Login</button> */}
                {/* </Link> */}
              </div>
              <div className={classes.inputContainer} label="Sign Up">
                <input
                  value={value.email}
                  claseName={classes.input}
                  type="email"
                  name=""
                  id=""
                  placeholder="email"
                />
                <input
                  value={value.password}
                  type="password"
                  name=""
                  id=""
                  placeholder="password"
                />
                <input
                  value={value.repeatPassword}
                  type="confirm"
                  name=""
                  id=""
                  placeholder="confirm password"
                />
                <Link to="/teachers" onClick={() => close()}>
                  <Button onClick={signUp} variant="contained" color="secondary">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </Tabs>
          </div>
        </Grid>
      </Grid>
    </Dialog>
  );
}
