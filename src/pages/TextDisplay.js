import React from 'react';
import { Box, Typography } from '@mui/material';
import { useStoreContext } from '../hooks/GlobalState';

const TextDisplay = ({fontIndex}) => {
  const [state] = useStoreContext();
  const { tabData } = state;

  return (
    <Box sx={{
        margin: "10vh 1vw 10vh 1vw",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}>
        <Typography sx={{margin: "2vh 0", fontSize: "3vh"}}>
          {tabData[fontIndex].data.content}
        </Typography>
    </Box>
  );
}

export default TextDisplay;