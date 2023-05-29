import { Dispatch } from 'redux';
import { loadAsyncCreator } from './common';
import { API_URL, PLANET_OBJECT_TYPE } from '../constants';

export const GET_PLANETS = "GET_PLANETS"
export const PLANETS_INCREASE_VISIT = "PLANETS_INCREASE_VISIT"
export const PLANETS_ERROR = "PLANETS_ERROR"
export const PLANETS_SET_CURRENT = "PLANETS_SET_CURRENT"

export const getPlanetsSuccess = (payload: Planet[]) => {
  return {
    type: GET_PLANETS,
    payload
  }
}

interface ErrorPayload {
  msg: string;
}

export const planetsError = (payload: ErrorPayload) => {
  return {
    type: PLANETS_ERROR,
    payload
  }
}

export const dispatchError = (dispatch: Dispatch, e: any) => {
  const payload=  { 
    msg: "Error to load Planets", 
  }
  dispatch(planetsError(payload))
}

export const loadPlanets = loadAsyncCreator(`${API_URL}/planets`, getPlanetsSuccess, PLANET_OBJECT_TYPE)

export const planetsIncreaseVisits = (value: Planet)  => {
  return {
    type: PLANETS_INCREASE_VISIT,
    payload: {value: value, objectType: PLANET_OBJECT_TYPE}
  }
}

export const setCurrentPlanet = (payload: number)  => {
  return {
    type: PLANETS_SET_CURRENT,
    payload
  }
}
