import React from "react";
import "./NavigationBar.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logo-white.png";
import nzflag from "../../img/nz-flag.png";
import maoriflag from "../../img/maori-flag.png";
import profilePhoto from "../../img/rawiri_profile.png";

export default function NavigationBar(props) {
  const notloggedin = (
    <div className="login-register">
      <div className="register" onClick={() => props.modalClick("Sign Up")}>
        Register
      </div>
      <span> | </span>
      <div className="login" onClick={() => props.modalClick("Login")}>
        Login
      </div>
    </div>
  );

  const loggedin = (
    <div className="login-register">
      <img src={profilePhoto} alt="" />
      <span>RAWIRI FLETCHER</span>
    </div>
  );

  return (
    <div className="navigation">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Features</Link>
          </li>
          <li>
            <Link to="/">Teachers</Link>
          </li>
        </ul>
      </nav>
      <div className="login-language">
        <div className="language">
          <span>LANG</span>
          <img src={nzflag} alt="" />
          <img src={maoriflag} alt="" />
        </div>
        {props.authenticated ? loggedin : notloggedin}
      </div>
    </div>
  );
}
