import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Box,
  ButtonBase,
  CardHeader,
  makeStyles,
} from "@material-ui/core";

import { FlightTakeoff, FlightLand, Money } from "@material-ui/icons";
import place from "./place.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {},
}));

const InspireSearchResultItem = ({ Item, OnSelect }) => {
  const classes = useStyles();
  return (
    <ButtonBase style={{ width: "90%" }} onClick={() => OnSelect(Item)}>
      <Card className={classes.root}>
        <CardHeader
          avatar={<img alt="logo" height="45" width="45" src={place} />}
          title={Item.destination}
          titleTypographyProps={{ variant: "h2" }}
          subheader={Item.detailedName}
          subheaderTypographyProps={{ variant: "caption" }}
        ></CardHeader>
        <CardContent>
          <Typography component="p" variant="body2" color="textPrimary">
            <Money />
            <Box component="span" m={1}>
              {Item.price.total} {Item.currency}
            </Box>
          </Typography>
          <Typography component="p" variant="body2" color="textPrimary">
            <FlightTakeoff />
            <Box component="span" m={1}>
              {Item.departureDate}
            </Box>
          </Typography>
          <Typography component="p" variant="body2" color="textPrimary">
            <FlightLand />
            <Box component="span" m={1}>
              {Item.returnDate}
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
};

export default InspireSearchResultItem;
