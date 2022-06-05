import React, { useState, useEffect } from 'react';
import { StoreProvider, useStoreContext } from "../hooks/GlobalState";
import Nav from "./Nav";
import { UPDATE_TABS, UPDATE_TAB_DATA, SELECT_TAB } from "..//hooks/actions";

const Widget = () => {
  const [state, dispatch] = useStoreContext();

  const { tabData } = state;
  const [ isLoading, setLoading] = useState(false);
  const [ isError, setError] = useState(false);

  useEffect(() => {
    if (!tabData.length) {
      setLoading(true);
      fetch ("http://json.ffwagency.md/tabs")
        .then((res) => res.json())
        .then((data) => {
          if (tabData.length !== data.length) {
            dispatch({
              type: UPDATE_TABS,
              tabData: data
            });
            dispatch({
              type: SELECT_TAB,
              selectTab: data[0].id
            })
          }
          setLoading(false);
        })
        .catch(err => {
          setError(true);
          console.log(err);
        });
    }
  },[dispatch, tabData.length]);
  console.log(state);
  return (
    <div>
      <Nav/>
      {
        isError ? (
          <div>EROOR....</div>
        ) : (
          !isLoading ? (
            <div>LOADED</div>
          ) : (
            <div>LOADING............</div>
          )
        )
      }
    </div>
  )
}

export default Widget;