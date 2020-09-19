import React from "react";

import "./Header.css";
import logo from "./logo.svg";

import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Typography variant="h1" color="textPrimary">
        Udaan App
      </Typography>
    </div>
  );
};

export default Header;
