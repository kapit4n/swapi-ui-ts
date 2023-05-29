import { getDataReducer, increaseVisitReducer, initialState, setCurrentReducer } from ".";
import { SPECIES_INCREASE_VISIT, SPECIES_SET_CURRENT, GET_SPECIES } from "../actions/species";
import { SPECIE_SEARCH_ACTION } from "../constants";

export const speciesReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case GET_SPECIES:
      return getDataReducer(state, action);
    case SPECIES_INCREASE_VISIT:
      return increaseVisitReducer(state, action);
    case SPECIES_SET_CURRENT:
      return setCurrentReducer(state, action);
    case SPECIE_SEARCH_ACTION:
      return Object.assign({}, state, {
        searchTerm: action.payload.searchTerm,
      });
    default:
      return state;
  }
};