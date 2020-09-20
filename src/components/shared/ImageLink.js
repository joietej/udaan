import React from "react";
import { Box } from "@material-ui/core";
import LinkButton from "./LinkButton";
const ImageLink = ({ Text, To, Image, AltImageText }) => {
  return (
    <Box m={1}>
      <img height="90" width="90" src={Image} alt={AltImageText} />
      <LinkButton Text={Text} To={To} />
    </Box>
  );
};

export default ImageLink;
