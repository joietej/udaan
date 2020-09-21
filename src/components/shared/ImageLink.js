import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";

const ImageLink = ({ Text, To, Image, AltImageText }) => {
  const history = useHistory();
  return (
    <Box m={1} onClick={() => history.push(To)} style={{cursor:"pointer" }}>
      <img height="90" width="90" src={Image} alt={AltImageText} />
      <Typography color="textPrimary">{Text}</Typography>
    </Box>
  );
};

export default ImageLink;
