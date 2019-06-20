import { get } from "lodash";
import * as types from "../actionTypes";

export function setSortParams(sortKey, sortType = "string") {
  return (dispatch, getState) => {
    const { sortParams } = getState().app;
    const order = get(sortParams, "order");
    //console.log('--',sortKey);
    dispatch({
      type: types.SET_SORT_PARAMS,
      payload: {
        data: {
          key: sortKey,
          order: order === "desc" ? "asc" : "desc",
          type: sortType
        }
      }
    });
  };
}

export function clearSortParams() {
  return {
    type: types.SET_SORT_PARAMS,
    payload: {
      data: undefined
    }
  };
}

export function setSearchParams(searchTerm, sortKey, sortType = "string") {
  return (dispatch, getState) => {
    console.log(searchTerm, sortKey, sortType ); 
    const { sortParams } = getState().app;
    const order = get(sortParams, "order");
    dispatch({
      type: types.SET_SEARCH_PARAMS,
      payload: {
        data: {
          searchTerm,
          key: sortKey,
          order: order === "desc" ? "asc" : "desc",
          type: sortType
        }
      }
    });
  };
}