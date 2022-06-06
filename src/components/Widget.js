import React, { useState, useEffect } from 'react';
import { useStoreContext } from "../hooks/GlobalState";
import { UPDATE_TABS, RESET_TAB_DATA, SELECT_TAB } from "../hooks/actions";
import { Box } from '@mui/material';

import Nav from "./Nav";
import FontSelection from '../pages/FontSelection';
import Loading from '../pages/Loading';
import ErrorDisplay from "../pages/ErrorDisplay";
import TextDisplay from '../pages/TextDisplay';

const Widget = () => {
  const [state, dispatch] = useStoreContext();

  const { tabData, selectTab } = state;
  const [ isLoading, setLoading] = useState(false);
  const [ isError, setError] = useState(false);
  const [ pageDisplay, setPageDisplay] = useState(-1);

  useEffect(() => {
    if (!tabData.length) {
      setLoading(true);
      fetch ("http://json.ffwagency.md/tabs")
        .then((res) => res.json())
        .then( async (data) => {
          dispatch({
            type: RESET_TAB_DATA
          });

          const newData = Promise.all( data.map(async (ele) => {
            const dataElement = await fetch (`http://json.ffwagency.md/${ele.content_endpoint}`)
            ele.data = await dataElement.json();
            return ele;
          }))
          return newData;
        })
        .then((fontData) => {
          dispatch({
            type: UPDATE_TABS,
            tabData: fontData
          });
          dispatch({
            type: SELECT_TAB,
            selectTab: fontData[0].id
          })
          
        })
        .finally(() => setLoading(false))
        .catch(err => {
          setError(true);
          console.log(err);
        });
    }
  },[dispatch, tabData.length]);

  useEffect(() => {
    setPageDisplay(tabData.findIndex(ele => {
    
      return ele.id === selectTab;
    }));
  }, [tabData, selectTab])

  return (
    <div>
      <Nav/>
      <Box sx={{
        border: "2px solid #D3D3D3",
        borderRadius: "1vh"
      }}>
        {
          isError ? (
            <ErrorDisplay/>
          ) : (
            !isLoading && pageDisplay >= 0 ? (
              <Box sx={{
                margin: "5vh 1vw 5vh 1vw",
                display: "flex",
                justifyContent: "center"
              }}>
                {
                  tabData[pageDisplay].data.type === "Font selection" ? 
                  <FontSelection fontIndex={pageDisplay}/>
                  :
                  <TextDisplay fontIndex={pageDisplay}/>
                }
              </Box>
            ) : (
              <Loading/>
            )
          )
        }
      </Box>
    </div>
  )
}
export default Widget;