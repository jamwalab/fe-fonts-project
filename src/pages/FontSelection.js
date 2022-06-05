import React from 'react';
import FontCard from '../components/FontCard';
import { useStoreContext } from '../hooks/GlobalState';

const FontSelection = ({fontIndex}) => {
  const [state, dispatch] = useStoreContext();
  const { tabData } = state;
  console.log(tabData[fontIndex].data.content)
  return (
    <>
      {
        tabData[fontIndex].data.content.map(font => (
          <FontCard font={font} key={font.id}/>
        ))
      }
    </>
  );
}

export default FontSelection;