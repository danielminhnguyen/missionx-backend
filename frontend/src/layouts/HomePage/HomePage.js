import React, { Component } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer/Footer";
import HomePageContent from "./HomePageContent";
import ModalLoginSignup from "../../components/ModalLoginSignup/ModalLoginSignup";
import { Switch, Route } from "react-router-dom";

export default class HomePage extends Component {
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
            <HomePageContent signUp={this.ModalOpen} />
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
