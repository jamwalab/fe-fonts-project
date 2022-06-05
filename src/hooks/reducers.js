import { UPDATE_TABS, RESET_TAB_DATA, SELECT_TAB } from "./actions";

import { useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TABS:
      return {
        ...state,
        tabData: [...action.tabData]
      };
    case RESET_TAB_DATA:
      return {
        ...state,
        tabData: []
      };
    case SELECT_TAB:
      return {
        ...state,
        selectTab: action.selectTab
      };
    default:
      return state;
  }
};

export const useFontReducer = (initialState) => {
  return useReducer(reducer, initialState);
};
