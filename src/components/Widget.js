import React, { useState, useEffect } from 'react';
import { StoreProvider, useStoreContext } from "../hooks/GlobalState";

import { UPDATE_TABS, UPDATE_TAB_DATA, IS_LOADING } from "..//hooks/actions";

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

  return (
    <div>
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