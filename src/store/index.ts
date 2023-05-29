import { homeReducer } from "../reducers";
import { combineReducers, applyMiddleware, createStore } from "redux"
import thunk from 'redux-thunk'
import { loadState, saveState } from "../lib/localStorage";
import { planetsReducer } from "../reducers/planetsReducer";
import { filmsReducer } from "../reducers/filmsReducer";
import { peopleReducer } from "../reducers/peopleReducer";
import { speciesReducer } from "../reducers/speciesReducer";
import { vehiclesReducer } from "../reducers/vehiclesReducer";

const persistedState = loadState();

export const RootReducer = combineReducers({
  people: peopleReducer,
  planets: planetsReducer,
  films: filmsReducer,
  species: speciesReducer,
  vehicles: vehiclesReducer,
  home: homeReducer,
})

const store = createStore(RootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(() => {
  saveState({
    people: store.getState().people,
    planets: store.getState().planets,
    films: store.getState().films,
    species: store.getState().species,
    vehicles: store.getState().vehicles,
    home: store.getState().home,
  });
});

export default store;