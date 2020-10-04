import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";

const ImageLink = ({ Text = null, To, Image, AltImageText, ImageHeight="90", ImageWidth="90" }) => {
  const history = useHistory();
  return (
    <Box m={1} onClick={() => history.push(To)} style={{cursor:"pointer" }}>
      <img height={ImageHeight} width={ImageWidth} src={Image} alt={AltImageText} />
      {Text && (<Typography color="textPrimary">{Text}</Typography>)}
    </Box>
  );
};

export default ImageLink;
