import React from "react";

import { DashboardTop, DashboardBottom, DashboardSide } from "components/Dashboard";

// import ProjectSubmission from "./projectSubmission/ProjectSubmission";
// import StudentProfile from "./studentProfile/StudentProfile";
// import HelpRequest from "../components/HelpRequest/HelpRequest";
// import "./TeacherDashboard.scss";
import { Redirect, Switch } from "react-router-dom";
import { NavTeacherDashboard, NavTeacherSetting } from "../dataset";

export default function DashBoard() {
  return (
    <div className="layout_teacher_nav">
      <DashboardTop layout="teachers" />
      <div className="middle-wrapper">
        <DashboardSide
          navData={NavTeacherDashboard}
          settingData={NavTeacherSetting}
          profile="/teacher-nav-profilephoto.png"
        />
        <div className="teacher-content-wrapper">
          <div className="teacher-content">
            <Switch>
              {/* <Route exact path="/teachers/studentprofile" component={StudentProfile}></Route>
              <Route exact path="/teachers/submission" component={ProjectSubmission}></Route>
              <Route exact path="/teachers/requests" component={HelpRequest}></Route> */}
              <Redirect from="/teachers" to="/teachers/submission" />
            </Switch>
          </div>
        </div>
      </div>
      <DashboardBottom />
    </div>
  );
}
