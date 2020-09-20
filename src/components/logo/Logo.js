import React from "react";
import { Typography } from "@material-ui/core";

import logo from "./logo.svg";
import "./logo.css";

const Logo = () => {
  return (
    <div className="App-logo-container">
      <img src={logo} className="App-logo" alt="logo" />
      <Typography variant="h1" color="textPrimary">
        Udaan App
      </Typography>
    </div>
  );
};

export default Logo;
