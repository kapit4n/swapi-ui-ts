import { homeReducer, peopleReducer, planetsReducer, filmsReducer } from "../reducers";
import { combineReducers, applyMiddleware, createStore } from "redux"
import thunk from 'redux-thunk'
import { loadState, saveState } from "../lib/localStorage";

const persistedState = loadState();


export const RootReducer = combineReducers({
  people: peopleReducer,
  planets: planetsReducer,
  films: filmsReducer,
  home: homeReducer,
})

const store = createStore(RootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(() => {
  saveState({
    people: store.getState().people,
    planets: store.getState().planets,
    films: store.getState().films,
    home: store.getState().home,
  });
});

export default store;