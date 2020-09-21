import React from "react";
import header from "./header-icon.svg";
import { AppBar, Toolbar, Box, Grid, IconButton } from "@material-ui/core";
import LinkButton from "../shared/LinkButton";

import { Settings } from "@material-ui/icons";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid container xs={10} alignItems="center">
            <Box m={1}>
              <img src={header} alt="flight" style={{ height: "5vh" }} />
            </Box>
            <LinkButton To="/" Text="Udaan App (Beta)" />
          </Grid>
          <Grid
            container
            xs={2}
            justify="flex-end"
            alignItems="center"
          >
            <IconButton>
              <Settings />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
