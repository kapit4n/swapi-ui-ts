import { Dispatch } from 'redux';
import { loadAsyncCreator } from './common';
import { API_URL, SPECIE_OBJECT_TYPE } from '../constants';

export const GET_SPECIES = "GET_SPECIES"
export const SPECIES_INCREASE_VISIT = "SPECIES_INCREASE_VISIT"
export const SPECIES_ERROR = "SPECIES_ERROR"
export const SPECIES_SET_CURRENT = "SPECIES_SET_CURRENT"

export const getSpeciesSuccess = (payload: Film[]) => {
  return {
    type: GET_SPECIES,
    payload
  }
}

interface ErrorPayload {
  msg: string;
}

export const speciesError = (payload: ErrorPayload) => {
  return {
    type: SPECIES_ERROR,
    payload
  }
}

export const dispatchError = (dispatch: Dispatch, e: any) => {
  const payload=  { 
    msg: "Error to load Films", 
  }
  dispatch(speciesError(payload))
}

export const loadSpecies = loadAsyncCreator(`${API_URL}/species`, getSpeciesSuccess, SPECIE_OBJECT_TYPE)

export const speciesIncreaseVisits = (value: Specie)  => {
  return {
    type: SPECIES_INCREASE_VISIT,
    payload: {value: value, objectType: SPECIE_OBJECT_TYPE}
  }
}

export const setCurrentSpecie = (payload: number)  => {
  return {
    type: SPECIES_SET_CURRENT,
    payload
  }
}
