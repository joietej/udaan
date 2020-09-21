import React from "react";
import { Typography, Grid } from "@material-ui/core";

const Footer = () => {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
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
      <Grid item>
        <Typography color="textPrimary" variant="caption">©2020 Tejas</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
