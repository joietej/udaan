import React from "react";
import { Typography, Box} from "@material-ui/core";
import { FlightTakeoff, FlightLand } from "@material-ui/icons";

const Segment = ({ Data }) => {
  return (
    <>
      <Typography component="p" variant="body2" color="textPrimary">
        {Data.carrierCode} {Data.number}
      </Typography>
      <Typography component="p" variant="body2" color="textPrimary">
        <FlightTakeoff />
        <Box component="span" m={1}>
        {Data.departure.iataCode} - {Data.departure.at} 
        </Box>
      </Typography>
      <Typography component="p" variant="body2" color="textPrimary">
        <FlightLand />
        {Data.arrival.iataCode} - {Data.arrival.at} 
      </Typography>
    </>
  );
};

export default Segment;
