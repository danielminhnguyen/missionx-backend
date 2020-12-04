import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";
import Home from "../screens/HomePage/Home";
import ModalLoginSignup from "../components/ModalLoginSignup/ModalLoginSignup";
import { Switch, Route } from "react-router-dom";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      request: null,
    };
    this.ModalOpen = this.ModalOpen.bind(this);
    this.ModalClose = this.ModalClose.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(event) {
    // console.log(event.target.className);
    if (event.target.className === "modal-container") {
      this.ModalClose();
    }
  }

  ModalOpen(event) {
    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", this.handleClickOutside);
    this.setState({ modalShow: true });
    this.setState({ request: event });
  }

  ModalClose() {
    document.body.style.overflow = "visible";
    this.setState({ modalShow: false });
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <div className="column">
        <NavigationBar modalClick={this.ModalOpen} />
        <Switch>
          <Route path="/">
            <Home signUp={this.ModalOpen} />
          </Route>
          <Route path="/profile">
            <Home signUp={this.ModalOpen} />
          </Route>
          <Route path="/projects">
            <Home signUp={this.ModalOpen} />
          </Route>
        </Switch>
        <Footer />
        <ModalLoginSignup
          show={this.state.modalShow}
          request={this.state.request}
          close={this.ModalClose}
        />
      </div>
    );
  }
}
