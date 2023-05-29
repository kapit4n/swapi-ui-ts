import { getDataReducer, increaseVisitReducer, initialState, setCurrentReducer } from ".";
import { VEHICLES_INCREASE_VISIT, VEHICLES_SET_CURRENT, GET_VEHICLES } from "../actions/vehicles";
import { VEHICLE_SEARCH_ACTION } from "../constants";

export const vehiclesReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case GET_VEHICLES:
      return getDataReducer(state, action);
    case VEHICLES_INCREASE_VISIT:
      return increaseVisitReducer(state, action);
    case VEHICLES_SET_CURRENT:
      return setCurrentReducer(state, action);
    case VEHICLE_SEARCH_ACTION:
      return Object.assign({}, state, {
        searchTerm: action.payload.searchTerm,
      });
    default:
      return state;
  }
};