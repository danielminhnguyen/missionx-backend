import React from "react";
import ReactDOM from "react-dom";
// import Main from "./layouts/Main";

// import TeacherDashboard from "./teacher/TeacherDashboard";
// import StudentDashboard from "./student/StudentDashboard";
// import TeacherProfile from "./personalProfile/TeacherProfile";
// import StudentProfile from "./personalProfile/StudentProfile";
// import Projects from "./screens/Projects/Projects";
import { Provider } from "react-redux";
import App from "./App";
import "./index.scss";
import { ThemeProvider } from "@material-ui/core";
import { defaultTheme } from "./themes";
import store from "store";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
