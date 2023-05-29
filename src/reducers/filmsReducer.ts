import { getDataReducer, increaseVisitReducer, initialState, setCurrentReducer } from ".";
import { FILMS_INCREASE_VISIT, FILMS_SET_CURRENT, GET_FILMS } from "../actions/films";
import { FILM_SEARCH_ACTION } from "../constants";

export const filmsReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case GET_FILMS:
      return getDataReducer(state, action);
    case FILMS_INCREASE_VISIT:
      return increaseVisitReducer(state, action);
    case FILMS_SET_CURRENT:
      return setCurrentReducer(state, action);
    case FILM_SEARCH_ACTION:
      return Object.assign({}, state, {
        searchTerm: action.payload.searchTerm,
      });
    default:
      return state;
  }
};