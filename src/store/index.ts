import { peopleReducer } from "../reducers";
import { combineReducers, applyMiddleware, createStore } from "redux"
import thunk from 'redux-thunk'

export const RootReducer = combineReducers({
  people: peopleReducer
})

const store = createStore(RootReducer, applyMiddleware(thunk))

export default store;