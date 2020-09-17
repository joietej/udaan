import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
} from "@material-ui/core";
import Itinerary from "./Itinerary";
const Offer = ({ Data }) => {
  return (
    <Card>
      <CardContent>
        <Typography component="h2" variant="h2" color="textPrimary">
          {Data.validatingAirlineCodes[0]}
        </Typography>
        <Typography component="p" variant="h5" color="textPrimary">
          {Data.price.grandTotal} {Data.price.currency}
        </Typography>
        <List>
          {Data.itineraries.map((i) => (
            <ListItem>
              <Itinerary Data={i} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Offer;
