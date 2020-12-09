import DashBoard from "layouts/Dashboard";
import Main from "layouts/Main";
import StudentProfile from "personalProfile/StudentProfile";
import TeacherProfile from "personalProfile/TeacherProfile";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import StudentDashboard from "teacher/TeacherDashboard";
import { NavTeacherDashboard } from "./dataset";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/student/projects">
    <ProjectLibrary category="student" />
  </Route>
  <Route path="/teachers/projects">
    <ProjectLibrary category="teacher" />
  </Route> */}
          {/* <Route path="/projects">
    <Project category="teacher" />
  </Route> */}
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/teachers/profile" component={TeacherProfile} />
          <Route path="/students/profile" component={StudentProfile} />
          <Route path="/teachers" component={NavTeacherDashboard} />
          <Route path="/students" component={StudentDashboard} />
          <Route path="/" component={Main} />

          {/* <Route path="/test" component={Test}></Route> */}
          {/* <Route path="*" component={Main} /> */}
          {/* <Redirect from="/" to="/missionx/"></Redirect> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
