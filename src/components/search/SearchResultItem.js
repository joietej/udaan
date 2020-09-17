import React from "react";
import { Typography, Card, CardContent, Box, ButtonBase } from "@material-ui/core";

import { FlightTakeoff, FlightLand } from "@material-ui/icons";

const SearchResultItem = ({ Item, OnSelect }) => {
  return (
    <ButtonBase onClick={() => OnSelect(Item)}>
      <Card>
        <CardContent>
          <Typography component="h2" variant="h2" color="textPrimary">
            {Item.destination}
          </Typography>
          <Typography component="p" variant="h5" color="textPrimary">
            {Item.price.total} INR
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

export default SearchResultItem;
