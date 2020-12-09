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

  const openModal = (event) => {
    setmodalOpen(true);
    setloginSingup(event);
  };

  const ModalClose = () => {
    setmodalOpen(false);
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
