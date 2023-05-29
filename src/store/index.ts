import { homeReducer } from "../reducers";
import { combineReducers, applyMiddleware, createStore } from "redux"
import thunk from 'redux-thunk'
import { loadState, saveState } from "../lib/localStorage";
import { planetsReducer } from "../reducers/planetsReducer";
import { filmsReducer } from "../reducers/filmsReducer";
import { peopleReducer } from "../reducers/peopleReducer";
import { speciesReducer } from "../reducers/speciesReducer";

const persistedState = loadState();

export const RootReducer = combineReducers({
  people: peopleReducer,
  planets: planetsReducer,
  films: filmsReducer,
  species: speciesReducer,
  home: homeReducer,
})

const store = createStore(RootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(() => {
  saveState({
    people: store.getState().people,
    planets: store.getState().planets,
    films: store.getState().films,
    species: store.getState().species,
    home: store.getState().home,
  });
});

export default store;