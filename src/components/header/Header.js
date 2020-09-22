import React from "react";
import { useSelector, useDispatch } from "react-redux";
import header from "./header-icon.svg";
import {
  AppBar,
  Toolbar,
  Box,
  Grid,
  IconButton,
  Badge,
} from "@material-ui/core";
import LinkButton from "../shared/LinkButton";

import { Settings, SystemUpdate } from "@material-ui/icons";

const Header = () => {
  const { notification, waitingWorker } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <AppBar>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={10}>
            <Grid container alignItems="center">
              <Box m={1}>
                <img src={header} alt="flight" style={{ height: "5vh" }} />
              </Box>
              <LinkButton To="/" Text="Udaan App (Beta)" />
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container justify="flex-end" alignItems="center">
              <IconButton>
                <Settings />
              </IconButton>
              {notification && (
                <IconButton onClick={() => dispatch({type:'APP_UPDATE', data : {waitingWorker}})}>
                  <Badge badgeContent={1} color="secondary">
                    <SystemUpdate />
                  </Badge>
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
