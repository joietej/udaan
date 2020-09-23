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
  Snackbar,
  makeStyles,
} from "@material-ui/core";
import LinkButton from "../shared/LinkButton";

import { Settings, SystemUpdate } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const { notification, waitingWorker } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(notification && true);
  const handleClose = () => setOpen(false);

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
