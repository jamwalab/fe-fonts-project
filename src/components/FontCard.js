import React from 'react';
import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', margin: '0 1vw 0 0'}}
  >
    •
  </Box>
);

const clickHandler = (e) => {
  console.log(`Colour ${e.target.closest("button").value} clicked!!`)
}

const FontCard = ({font, main}) => {
  return (
    <Card sx={{ 
        width: "100%",
        boxShadow: "none",
        gridArea: (main? "main" : "")
      }}>
      <CardActionArea onClick={clickHandler} value={font["color-blind-label"]} sx={{
        transition: "0.5s all",
        '&:hover': {
          opacity: '70%'
        },
        '&:focus': {
          opacity: '70%'
        },
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
              outline: "2px solid black"
              
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
            padding: "1.8vh 1vw",
            display: "inline-flex"
          }}>
            {bull} 
            <article>{font.label}</article>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default FontCard;