import { getDataReducer, increaseVisitReducer, initialState, setCurrentReducer } from ".";
import { STARSHIPS_INCREASE_VISIT, STARSHIPS_SET_CURRENT, GET_STARSHIPS } from "../actions/starships";
import { STARSHIP_SEARCH_ACTION } from "../constants";

export const starshipsReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case GET_STARSHIPS:
      return getDataReducer(state, action);
    case STARSHIPS_INCREASE_VISIT:
      return increaseVisitReducer(state, action);
    case STARSHIPS_SET_CURRENT:
      return setCurrentReducer(state, action);
    case STARSHIP_SEARCH_ACTION:
      return Object.assign({}, state, {
        searchTerm: action.payload.searchTerm,
      });
    default:
      return state;
  }
};