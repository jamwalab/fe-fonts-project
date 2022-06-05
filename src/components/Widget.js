import React, { useState, useEffect } from 'react';
import { useStoreContext } from "../hooks/GlobalState";
import { UPDATE_TABS, RESET_TAB_DATA, SELECT_TAB } from "../hooks/actions";
import { Box, Typography} from '@mui/material';

import Nav from "./Nav";
import FontSelection from '../pages/FontSelection';

const Widget = () => {
  const [state, dispatch] = useStoreContext();

  const { tabData, selectTab } = state;
  const [ isLoading, setLoading] = useState(false);
  const [ isError, setError] = useState(false);
  const [ pageDisplay, setPageDisplay] = useState(-1);

  useEffect(() => {
    console.log("trigger");
    if (!tabData.length) {
      setLoading(true);
      fetch ("http://json.ffwagency.md/tabs")
        .then((res) => res.json())
        .then( async (data) => {
          dispatch({
            type: RESET_TAB_DATA
          });
          /*
          const newData = await data.map(ele => {
            ele.data = fetch (`http://json.ffwagency.md/${ele.content_endpoint}`)
              .then((res) => res.json())
              .then((data) => {
                return data;
              })
            return ele;
          })*/

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
/*
  tabData.forEach(element => {
    console.log(element, Object.keys(element));
  });*/
  if (tabData.length) {
    console.log(tabData[0].data);
  }

  return (
    <div>
      <Nav/>
      <Box sx={{
        border: "1px solid"
      }}>
        {
          isError ? (
            <div>EROOR....</div>
          ) : (
            !isLoading && pageDisplay >= 0 ? (
              <div>LOADED
                {
                  tabData[pageDisplay].data.type === "Font selection" ? 
                  <FontSelection fontIndex={pageDisplay}/>
                  :
                  <div>Other</div>
                }
              </div>
            ) : (
              <div>LOADING............</div>
            )
          )
        }
      </Box>
    </div>
  )
}

export default Widget;