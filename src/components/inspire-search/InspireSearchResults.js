import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import InspireSearchResultItem from "./InspireSearchResultItem";

const useStyles = makeStyles( theme => ({
  root: {
    width: '80vw',
    backgroundColor: theme.palette.background.paper,
    maxHeight: '60vh',
    overflowY:'auto',
    justifyContent:'center'
  },
}));

function InspireSearchResults({ Items, OnSelection }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {Items.map((d, i) => (
        <InspireSearchResultItem
          Item={d}
          key={`d.destination-${i}`}
          OnSelect={OnSelection}
        ></InspireSearchResultItem>
      ))}
    </Grid>
  );
}

export default InspireSearchResults;
