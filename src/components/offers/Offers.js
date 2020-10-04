import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  List,
  ListItem,
  Grid,
  Badge,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import Offer from "../offers/Offer";

const Offers = () => {
  const { offers, loadingOffers: loading } = useSelector((state) => state.app);
  return (
    <Grid container justify="center">
      <Grid item>
        <Badge badgeContent={offers.length} color="secondary">
          <Typography variant="h2">Flight Offers</Typography>
        </Badge>
      </Grid>
      {loading && <LinearProgress color="secondary" />}
      <List>
        {(loading ? Array.from(new Array(5)) : offers).map((o) => (
          <>
            {loading ? (
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
    </Grid>
  );
};

export default Offers;
