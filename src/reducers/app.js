import * as actionTypes from "../actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SORT_PARAMS:
      return { ...state, sortParams: action.payload.data };
  	case actionTypes.SET_SEARCH_PARAMS:
            return { ...state, searchParams: action.payload.data };
    default:
      return state;
  }
};
