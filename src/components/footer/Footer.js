import React from "react";
import {useSelector} from "react-redux"
import { Typography, Grid } from "@material-ui/core";



const Footer = () => {
  const {footerMessage : message} = useSelector(state => state.app);
  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid container xs={6} alignItems="center">
        <div style={{ color: "gray", opacity: "25%" }}>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </Grid>
      <Grid container xs={6} alignItems="center" justify="flex-end">
        <Typography color="textPrimary">{message}</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
