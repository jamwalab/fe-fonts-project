import { UPDATE_TABS, UPDATE_TAB_DATA, IS_LOADING } from "./actions";

import { useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TABS:
      return {
        ...state,
        tabData: [...action.tabData]
      };
    case UPDATE_TAB_DATA:
      return state;
    case IS_LOADING:
      return state;
    default:
      return state;
  }
};

export const useFontReducer = (initialState) => {
  return useReducer(reducer, initialState);
};
