import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Main from "./layouts/Main";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TeacherDashboard from "./teacher/TeacherDashboard";
import StudentDashboard from "./student/StudentDashboard";
import Test from "./test/test";
import TeacherProfile from "./personalProfile/TeacherProfile";
import StudentProfile from "./personalProfile/StudentProfile";
import Project from "./screens/Projects";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/* <Route path="/student/projects">
          <ProjectLibrary category="student" />
        </Route>
        <Route path="/teachers/projects">
          <ProjectLibrary category="teacher" />
        </Route> */}
        <Route path="/projects">
          <Project category="teacher" />
        </Route>
        <Route path="/teachers/profile" component={TeacherProfile}></Route>
        <Route path="/students/profile" component={StudentProfile}></Route>
        <Route path="/teachers" component={TeacherDashboard}></Route>
        <Route path="/students" component={StudentDashboard}></Route>
        <Route exact path="/" component={Main}></Route>

        <Route path="/test" component={Test}></Route>
        <Route path="*" component={Main} />
        {/* <Redirect from="/" to="/missionx/"></Redirect> */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
