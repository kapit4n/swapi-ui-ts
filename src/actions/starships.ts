import { Dispatch } from 'redux';
import { loadAsyncCreator } from './common';
import { API_URL, STARSHIP_OBJECT_TYPE } from '../constants';

export const GET_STARSHIPS = "GET_STARSHIPS"
export const STARSHIPS_INCREASE_VISIT = "STARSHIPS_INCREASE_VISIT"
export const STARSHIPS_ERROR = "STARSHIPS_ERROR"
export const STARSHIPS_SET_CURRENT = "STARSHIPS_SET_CURRENT"

export const getStarshipsSuccess = (payload: Film[]) => {
  return {
    type: GET_STARSHIPS,
    payload
  }
}

interface ErrorPayload {
  msg: string;
}

export const starshipsError = (payload: ErrorPayload) => {
  return {
    type: STARSHIPS_ERROR,
    payload
  }
}

export const dispatchError = (dispatch: Dispatch, e: any) => {
  const payload=  { 
    msg: "Error to load Films", 
  }
  dispatch(starshipsError(payload))
}

export const loadStarships = loadAsyncCreator(`${API_URL}/starships`, getStarshipsSuccess, STARSHIP_OBJECT_TYPE)

export const starshipsIncreaseVisits = (value: Vehicle)  => {
  return {
    type: STARSHIPS_INCREASE_VISIT,
    payload: {value: value, objectType: STARSHIP_OBJECT_TYPE}
  }
}

export const setCurrentStarship = (payload: number)  => {
  return {
    type: STARSHIPS_SET_CURRENT,
    payload
  }
}
