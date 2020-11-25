import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Grid,
  Badge,
  Typography,
  LinearProgress,
  makeStyles,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import Offer from "../offers/Offer";

const useStyles = makeStyles((theme) => ({
  root: {
    //width: "80vw",
    backgroundColor: theme.palette.background.default,
    maxHeight: "75vh",
    overflowY: "auto",
    gap:"1rem"
  },
}));

const Offers = () => {
  const classes = useStyles();
  const { offers, loadingOffers: loading } = useSelector((state) => state.app);
  return (
    <Grid container justify="center">
      <Grid item>
        <Badge badgeContent={offers.length} color="secondary">
          <Typography variant="h2">Flight Offers</Typography>
        </Badge>
      </Grid>
      {loading && <LinearProgress color="secondary" />}
      <Grid container className={classes.root} justify="center">
        {(loading ? Array.from(new Array(20)) : offers).map((o, i) =>
          loading ? (
            <Box key={`skeleton_offer_${i}`} m={1}>
              <Skeleton variant="rect" width={300} height={125} />
            </Box>
          ) : (
            <Grid item key={o.id}>
              <Offer Data={o} />
            </Grid>
          )
        )}
      </Grid>
    </Grid>
  );
};

export default Offers;
