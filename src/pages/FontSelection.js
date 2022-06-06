import React from 'react';
import { Box } from '@mui/material';
import FontCard from '../components/FontCard';
import { useStoreContext } from '../hooks/GlobalState';

const FontSelection = ({fontIndex}) => {
  const [state] = useStoreContext();
  const { tabData } = state;

  const totalData = Math.ceil((tabData[fontIndex].data.content.length - 3) / 2) > 0 ? 1 : 0;
  return (
    <Box sx={{
        display: "grid",
        gridTemplateColumns: "[main-start] 45% [main-end] 55%",
        gridTemplateRows: `[main-start] 1fr 1fr [main-end] ${totalData}fr`,
        alignItems: "center",
        justifyItems: "center"
      }}>
      {
        tabData[fontIndex].data.content.map((font, index) => {
          return index === 0 ? 
            <FontCard font={font} main={true} key={font.id} />
          :
            <FontCard font={font} main={false} key={font.id}/>
        })
      }
    </Box>
  );
}

export default FontSelection;