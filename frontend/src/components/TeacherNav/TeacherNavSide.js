import React, { Component } from "react";
import "./TeacherNavSide.scss";
// import iconHelp from "./teacher-nav-help.png";
// import iconLibary from "./teacher-nav-library.png";
// import iconProgress from "./teacher-nav-progress.png";
// import iconProfile from "./teacher-nav-studentprofile.png";
// import iconSubmission from "./teacher-nav-submission.png";

import { Link } from "react-router-dom";

export default class TeacherNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
      navData: this.props.navData,
      settingData: this.props.settingData,
      profilePhoto: this.props.profile,
      isAuthenticated: true,
    };
    this.CollapseToggle = this.CollapseToggle.bind(this);
  }

  CollapseToggle() {
    // console.log("click");
    if (this.state.collapse) {
      this.setState({ collapse: false });
      document.getElementById("dashboard-top").classList.add("minimize");
    } else {
      document.getElementById("dashboard-top").classList.remove("minimize");
      this.setState({ collapse: true });
    }
  }

  render() {
    // const settingIcon = <FontAwesomeIcon icon={faCog} style={{ color: "white" }} />;
    // let minimizeStyle = {};
    let navList = this.state.navData.map((item) => (
      <NavigationListComponent
        key={item.id}
        src={item.imgURL}
        title={item.title}
        linkto={item.linkto}
      />
    ));
    let settingList = this.state.settingData.map((item) => (
      <NavigationListComponent
        key={item.id}
        src={item.imgURL}
        title={item.title}
        linkto={item.linkto}
      />
    ));
    console.log(process.env.PUBLIC_URL + this.state.profilePhoto);
    return (
      <div className={`${this.state.collapse ? "" : "minimize"}`}>
        <div className="nav-teacher-wrapper">
          <div className="profile">
            <img src={this.state.profilePhoto} alt=""></img>
          </div>
          {/* <div className="center-item"> */}
          <nav className="nav-teacher-side">{navList}</nav>
          {/* </div> */}
          <div className="right-caret-container">
            <div className="right-caret" onClick={this.CollapseToggle}>
              <div className="right-triangle"></div>
            </div>
          </div>

          <div className="logout-setting-wrapper">
            <div className="logout-holder">
              {settingList}
              {/* <div className="item">
                <img src="/userIcon.png" alt="" />
                <p>Profile</p>
              </div>
              <div className="item">
                <img src="/settingIcon.png" alt="" />
                <p>Settings</p>
              </div>
              <div className="item">
                <img src="/logoutIcon.png" alt="" />
                <p>Logout</p> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function NavigationListComponent(props) {
  return (
    <>
      <Link to={props.linkto}>
        <img src={props.src} alt="" />
        <span>{props.title}</span>
      </Link>
    </>
  );
}
