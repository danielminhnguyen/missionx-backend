import React, { Component } from "react";
import "./ModalLoginSignup.scss";
import { Link } from "react-router-dom";
import Tabs from "../Tabs/Tabs";

export default class ModalLoginSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.body.style.overflow = "hidden";
    document.body.style.filter = "blur 5px";
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.body.style.overflow = "unset";
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      alert("You clicked outside of me!");
    }
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal-container">
        <div className="modal-login">
          <div className="student-login">
            <Tabs>
              <div label="Gator">
                See ya later, <em>Alligator</em>!
              </div>
              <div label="Croc">
                After 'while, <em>Crocodile</em>!
              </div>
              <div label="Sarcosuchus">
                Nothing to see here, this tab is <em>extinct</em>!
              </div>
            </Tabs>
            <img src="../.../../modal-student.png" alt="" />
            <h2>Students</h2>
            <div className="login-signup-switch">
              <p>Login</p>
              <p>Signup</p>
            </div>
            <input type="email" name="" id="" />
            <input type="password" name="" id="" />
            <Link to="/students">
              <button>Login</button>
            </Link>
          </div>

          <div className="teacher-login">
            <img src="/modal-teacher.png" alt="" />
            <h2>Teachers</h2>
            <div className="login-signup-switch">
              <p>Login</p>
              <p>Signup</p>
            </div>
            <input type="email" name="" id="" />
            <input type="password" name="" id="" />
            <Link to="/teachers">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
