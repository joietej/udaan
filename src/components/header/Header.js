import React from "react";
import { useLocation } from "react-router-dom";
import header from "./header-icon.svg";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Grid,
  IconButton,
} from "@material-ui/core";
import LinkButton from "../shared/LinkButton";
import { routeNames } from "../../model/routeNames";

import { Settings } from "@material-ui/icons";

const routes = routeNames();

const Header = () => {
  const location = useLocation();
  return (
    <AppBar>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={3} style={{ display: "flex" }} alignItems="center">
            <Box m={1}>
              <img src={header} alt="flight" style={{ height: "5vh" }} />
            </Box>
            <LinkButton To="/" Text="Udaan App (Beta)" />
          </Grid>
          <Grid item xs={3}>
            <Typography color="textPrimary">
              {routes[location.pathname] || "Lets Go!"}
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            style={{ display: "flex" }}
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
