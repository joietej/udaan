import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import DestinationCard from "./DestinationCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80vw",
    backgroundColor: theme.palette.background.default,
    maxHeight: "70vh",
    overflowY: "auto",
  },
}));

function Destinations({ Items, OnSelection }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={1}>
      {Items.map((d, i) => (
        <Grid item xs={12} md={4}>
          <DestinationCard
            Item={d}
            key={`d.destination-${i}`}
            OnSelect={OnSelection}
          ></DestinationCard>
        </Grid>
      ))}
    </Grid>
  );
}

export default Destinations;
