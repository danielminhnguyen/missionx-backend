import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "store";

// material ui
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { defaultTheme } from "./themes";

// components
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// styles
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
