import React from "react";

import {
  AppBar,
  Box,
  List,
  ListItem,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { LocalOffer, Close } from "@material-ui/icons";
import Offer from "../offers/Offer";

const Offers = ({ Data, Loading, OnClose }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Flight Offers</Typography>
          <IconButton color="inherit">
            <Badge badgeContent={Data.length} color="secondary">
              <LocalOffer />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={OnClose}>
            <Close />
          </IconButton>
        </Toolbar>
        {Loading && <LinearProgress color="secondary" />}
      </AppBar>
      <List>
        {(Loading ? Array.from(new Array(5)) : Data).map((o) => (
          <>
            {Loading ? (
              <Box m={1}>
                <Skeleton variant="rect" width={250} height={125} />
              </Box>
            ) : (
              <ListItem>
                <Offer Data={o} />
              </ListItem>
            )}
          </>
        ))}
      </List>
    </>
  );
};

export default Offers;
