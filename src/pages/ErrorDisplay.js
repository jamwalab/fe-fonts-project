import React from 'react';
import { Box, Typography } from '@mui/material';
import StopIcon from '@mui/icons-material/Stop';

const ErrorDisplay = () => {
  return (
    <Box sx={{
        margin: "10vh 1vw 10vh 1vw",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        
      }}>
        <StopIcon fontSize="large"/>
        <Typography sx={{margin: "2vh 0", fontSize: "2vh"}}>
          An error was encountered. Please try again!!
        </Typography>
    </Box>
  );
}

export default ErrorDisplay;