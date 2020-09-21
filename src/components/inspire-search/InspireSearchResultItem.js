import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Box,
  ButtonBase,
  CardHeader,
} from "@material-ui/core";

import { FlightTakeoff, FlightLand, Money } from "@material-ui/icons";
import place from "./place.svg";

const InspireSearchResultItem = ({ Item, OnSelect }) => {
  return (
    <ButtonBase onClick={() => OnSelect(Item)}>
      <Card>
        <CardHeader
          avatar={<img alt="logo" height="45" width="45" src={place} />}
          title={Item.destination}
          subheader={Item.detailedName}
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
