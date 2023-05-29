import { getDataReducer, increaseVisitReducer, initialState, setCurrentReducer } from ".";
import { GET_PEOPLE, PEOPLE_INCREASE_VISIT, SET_CURRENT } from "../actions/people";
import { PERSON_SEARCH_ACTION } from "../constants";

export const peopleReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case GET_PEOPLE:
      return getDataReducer(state, action);
    case PEOPLE_INCREASE_VISIT:
      return increaseVisitReducer(state, action);
    case SET_CURRENT:
      return setCurrentReducer(state, action);
    case PERSON_SEARCH_ACTION:
      return Object.assign({}, state, {
        searchTerm: action.payload.searchTerm,
      });
    default:
      return state;
  }
};