import { Dispatch } from 'redux';
import { loadAsyncCreator } from './common';
import { API_URL, VEHICLE_OBJECT_TYPE } from '../constants';

export const GET_VEHICLES = "GET_VEHICLES"
export const VEHICLES_INCREASE_VISIT = "VEHICLES_INCREASE_VISIT"
export const VEHICLES_ERROR = "VEHICLES_ERROR"
export const VEHICLES_SET_CURRENT = "VEHICLES_SET_CURRENT"

export const getVehiclesSuccess = (payload: Film[]) => {
  return {
    type: GET_VEHICLES,
    payload
  }
}

interface ErrorPayload {
  msg: string;
}

export const vehiclesError = (payload: ErrorPayload) => {
  return {
    type: VEHICLES_ERROR,
    payload
  }
}

export const dispatchError = (dispatch: Dispatch, e: any) => {
  const payload=  { 
    msg: "Error to load Films", 
  }
  dispatch(vehiclesError(payload))
}

export const loadVehicles = loadAsyncCreator(`${API_URL}/vehicles`, getVehiclesSuccess, VEHICLE_OBJECT_TYPE)

export const vehiclesIncreaseVisits = (value: Vehicle)  => {
  return {
    type: VEHICLES_INCREASE_VISIT,
    payload: {value: value, objectType: VEHICLE_OBJECT_TYPE}
  }
}

export const setCurrentVehicle = (payload: number)  => {
  return {
    type: VEHICLES_SET_CURRENT,
    payload
  }
}
