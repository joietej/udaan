import React from 'react'
import { Typography, Box } from "@material-ui/core";

const TextButton = ({Text, OnClick}) => {
    return (
        <Box onClick={OnClick} style={{cursor:"pointer" }}>
          <Typography color="textPrimary">{Text}</Typography>
        </Box>
    )
}

export default TextButton
