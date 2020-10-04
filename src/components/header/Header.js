import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import header from "./header-icon.svg";
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Badge,
  Snackbar,
  makeStyles,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";

import { Settings, SystemUpdate, ArrowBack } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";
import ImageLink from "../shared/ImageLink";
import routeNames from "../../model/routeNames";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Header = () => {
  const routes = routeNames();
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const { notification, waitingWorker } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(notification && true);

  const handleClose = () => {
    setOpen(false);
    dispatch({ type: "APP_CLEAR_NOTIFICATION" });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const openMenu = Boolean(anchorEl);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const CheckForUpdate = (e) => window.location.reload();

  return (
    <AppBar>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={10}>
            <Grid container alignItems="center" spacing={1}>
              {history.length && location.pathname !== "/" && (
                <IconButton onClick={() => history.goBack()}>
                  <ArrowBack />
                </IconButton>
              )}
              <ImageLink
                To="/"
                Image={header}
                AltImageText="Udaan App (Beta)"
                ImageHeight="32"
                ImageWidth="32"
              />
              <Typography variant="h5" color="textPrimary">
                {routes[location.pathname]}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container justify="flex-end" alignItems="center">
              <IconButton onClick={handleMenu}>
                <Settings />
              </IconButton>
              {waitingWorker && (
                <IconButton
                  onClick={() =>
                    dispatch({ type: "APP_UPDATE", data: { waitingWorker } })
                  }
                >
                  <Badge badgeContent={1} color="secondary">
                    <SystemUpdate />
                  </Badge>
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={openMenu}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={CheckForUpdate}>Check For Update</MenuItem>
        </Menu>
      </>
      <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          {notification && (
            <MuiAlert
              levation={6}
              variant="filled"
              severity="info"
              onClose={handleClose}
            >
              {notification}
            </MuiAlert>
          )}
        </Snackbar>
      </div>
    </AppBar>
  );
};

export default Header;
