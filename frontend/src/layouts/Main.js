import React, { useState } from "react";
import NavigationBar from "components/NavigationBar/NavigationBar";
import Footer from "components/Footer/Footer";
// import Footer from "Components/Footer/Footer/js";
import Home from "screens/Home/Home";
import Projects from "screens/Projects/Projects";
import ModalLoginSignup from "components/ModalLoginSignup/ModalLoginSignupMaterial";
import { Switch, Route } from "react-router-dom";

export default function Main() {
  const [modalOpen, setmodalOpen] = useState(false);
  const [loginSingup, setloginSingup] = useState(null);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modalShow: false,
  //     request: null,
  //   };
  //   this.ModalOpen = this.ModalOpen.bind(this);
  //   this.ModalClose = this.ModalClose.bind(this);
  //   this.handleClickOutside = this.handleClickOutside.bind(this);
  // }

  const openModal = (event) => {
    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleClickOutside);
    setmodalOpen(true);
    setloginSingup(event);
  };

  const ModalClose = () => {
    document.body.style.overflow = "visible";
    setmodalOpen(false);
    document.removeEventListener("mousedown", handleClickOutside);
  };

  const handleClickOutside = (event) => {
    // console.log(event.target.className);
    if (event.target.className === "modal-container") {
      ModalClose();
    }
  };

  return (
    <div className="column">
      <NavigationBar modalClick={openModal} />
      <Switch>
        <Route exact path="/">
          <Home signUp={openModal} />
        </Route>
        <Route path="/profile">
          <Home signUp={openModal} />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Footer />

      <ModalLoginSignup show={modalOpen} request={loginSingup} close={ModalClose} />
    </div>
  );
}
