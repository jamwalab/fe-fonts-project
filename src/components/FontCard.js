import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px'}}
  >
    •
  </Box>
);

const FontCard = ({font, main}) => {
  return (
    <Card sx={{ 
        width: "100%",
        boxShadow: "none",
        gridArea: (main? "main" : "")
      }}>
      <CardContent sx={{
        padding: "1.5vw",
        display: "flex",
        flexDirection: (main? "column" : ""),
      }}>
        <Box sx={{flex: "30%"}}>
          <Box sx={{ 
            backgroundColor: `${font.color}`, 
            width: (main? "18vw" : "10vw"),
            paddingTop: (main? "18vw" : "10vw"),
            position: "relative",
            border: "0.5vw solid white",
            borderRadius: "1vh",
            outline: "2px solid black",
            
            }} color="#ffffff" gutterBottom>
              <Typography sx={{
                position: "absolute",
                bottom: "0px",
                left: "10px",
                fontSize: "3vw"
              }}>{font.abbr}</Typography>
          </Box>
        </Box>
        <Box variant="body2" sx={{
          flex: "70%",
          fontSize: "2vw",
          padding: "1.5vh 1vw"
        }}>
          {bull} {font.label}
        </Box>
      </CardContent>
    </Card>
  );
}

export default FontCard;