import React from "react";
import { Typography, Box, Card, CardContent } from "@material-ui/core";
import { FlightTakeoff, FlightLand } from "@material-ui/icons";

const Segment = ({ Data }) => {
  return (
    <Card>
      <CardContent>
        <Typography component="p" variant="h6" color="textPrimary">
          {`${Data.departure.iataCode} to ${Data.arrival.iataCode}`}
        </Typography>
        <Typography component="p" variant="body2" color="textPrimary">
          {Data.carrierCode} {Data.number}
        </Typography>
        <Typography component="p" variant="body2" color="textPrimary">
          {Data.aircraft.code}
        </Typography>

        <Typography component="p" variant="body2" color="textPrimary">
          <FlightTakeoff />
          <Box component="span" m={1}>
            {new Date(Data.departure.at).toDateString()}
          </Box>
        </Typography>
        <Typography component="p" variant="body2" color="textPrimary">
          <FlightLand />
          <Box component="span" m={1}>
            {new Date(Data.arrival.at).toDateString()}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Segment;
