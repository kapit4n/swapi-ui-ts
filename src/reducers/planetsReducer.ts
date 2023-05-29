import { getDataReducer, increaseVisitReducer, initialState, setCurrentReducer } from ".";

import {
  GET_PLANETS,
  PLANETS_INCREASE_VISIT,
  PLANETS_SET_CURRENT,
} from "../actions/planets";
import { PLANET_SEARCH_ACTION } from "../constants";


export const planetsReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case GET_PLANETS:
      return getDataReducer(state, action);
    case PLANETS_INCREASE_VISIT:
      return increaseVisitReducer(state, action);
    case PLANETS_SET_CURRENT:
      return setCurrentReducer(state, action);
    case PLANET_SEARCH_ACTION:
      return Object.assign({}, state, {
        searchTerm: action.payload.searchTerm,
      });
    default:
      return state;
  }
};