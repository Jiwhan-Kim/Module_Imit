import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Link } from "react-router-dom";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Link to="/main" />
        <Link to="/time" />
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
