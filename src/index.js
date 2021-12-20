import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // <React.StrictMode>
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    <App />
  </>,
  // </React.StrictMode>
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
