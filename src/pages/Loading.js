import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Loading = () => {
  return (
    <Box sx={{
        margin: "10vh 1vw 10vh 1vw",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        
      }}>
        <CircularProgress />
        <Typography sx={{margin: "2vh 0", fontSize: "5vh"}}>
          Loading...
        </Typography>
    </Box>
  );
}

export default Loading;