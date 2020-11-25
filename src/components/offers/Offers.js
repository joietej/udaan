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
      <Grid container justify="center" style={{ gap: "1rem" }}>
        {(loading ? Array.from(new Array(20)) : offers).map((o, i) => (
          <>
            {loading ? (
              <Box key={`skeleton_offer_${i}`} m={1}>
                <Skeleton variant="rect" width={300} height={125} />
              </Box>
            ) : (
              <Grid item key={o.id} style={{ width: "20%" }}>
                <Offer Data={o} />
              </Grid>
            )}
          </>
        ))}
      </Grid>
    </Grid>
  );
};

export default Offers;
