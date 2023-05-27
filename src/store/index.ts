import { peopleReducer } from "../reducers";
import { combineReducers, applyMiddleware, createStore } from "redux"
import thunk from 'redux-thunk'
import { loadState, saveState } from "../lib/localStorage";

const persistedState = loadState();


export const RootReducer = combineReducers({
  people: peopleReducer
})

const store = createStore(RootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(() => {
  saveState({
    people: store.getState().people
  });
});

export default store;