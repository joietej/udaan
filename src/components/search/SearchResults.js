import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import SearchResultItem from "./SearchResultItem";

const useStyles = makeStyles( theme => ({
  root: {
    width: '80vw',
    backgroundColor: theme.palette.background.paper,
    maxHeight: '50vh',
    overflowY:'auto',
    justifyContent:'center'
  },
}));

function SearchResults({ Items }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {Items.map((d, i) => (
        <SearchResultItem
          Item={d}
          key={`d.destination-${i}`}
        ></SearchResultItem>
      ))}
    </Grid>
  );
}

export default SearchResults;
