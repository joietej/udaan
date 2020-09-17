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
        {Data.departure.iataCode} - {new Date(Data.departure.at).toDateString()} 
        </Box>
      </Typography>
      <Typography component="p" variant="body2" color="textPrimary">
        <FlightLand />
        {Data.arrival.iataCode} - {new Date(Data.arrival.at).toDateString()} 
      </Typography>
    </>
  );
};

export default Segment;
