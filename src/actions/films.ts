import { Dispatch } from 'redux';
import { loadAsyncCreator } from './common';
import { API_URL, FILM_OBJECT_TYPE } from '../constants';

export const GET_FILMS = "GET_FILMS"
export const FILMS_INCREASE_VISIT = "FILMS_INCREASE_VISIT"
export const FILMS_ERROR = "FILMS_ERROR"
export const FILMS_SET_CURRENT = "FILMS_SET_CURRENT"

export const getFilmsSuccess = (payload: Film[]) => {
  return {
    type: GET_FILMS,
    payload
  }
}

interface ErrorPayload {
  msg: string;
}

export const filmsError = (payload: ErrorPayload) => {
  return {
    type: FILMS_ERROR,
    payload
  }
}

export const dispatchError = (dispatch: Dispatch, e: any) => {
  const payload=  { 
    msg: "Error to load Films", 
  }
  dispatch(filmsError(payload))
}

export const loadFilms = loadAsyncCreator(`${API_URL}/films`, getFilmsSuccess, FILM_OBJECT_TYPE)

export const filmsIncreaseVisits = (value: Film)  => {
  return {
    type: FILMS_INCREASE_VISIT,
    payload: {value: value, objectType: FILM_OBJECT_TYPE}
  }
}

export const setCurrentFilm = (payload: number)  => {
  return {
    type: FILMS_SET_CURRENT,
    payload
  }
}
