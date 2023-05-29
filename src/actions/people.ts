import axios from 'axios';
import { Dispatch } from 'redux';
import { loadAsyncCreator } from './common';
import { API_URL, PERSON_OBJECT_TYPE } from '../constants';

export const GET_PEOPLE = "GET_PEOPLE"
export const PEOPLE_INCREASE_VISIT = "PEOPLE_INCREASE_VISIT"
export const PEOPLE_ERROR = "PEOPLE_ERROR"
export const SET_CURRENT = "SET_CURRENT"

export const getPeopleSuccess = (payload: Person[]) => {
  return {
    type: GET_PEOPLE,
    payload
  }
}

interface ErrorPayload {
  msg: string;
}

export const peopleError = (payload: ErrorPayload) => {
  return {
    type: PEOPLE_ERROR,
    payload
  }
}

export const dispatchError = (dispatch: Dispatch, e: any) => {
  const payload=  { 
    msg: "Error to load People", 
  }
  dispatch(peopleError(payload))
}

export const loadPeople = loadAsyncCreator(`${API_URL}/people`, getPeopleSuccess, PERSON_OBJECT_TYPE)

// TODO: remove this
export const loadPeople2 = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/people`)
    const people = res.data.results;
    dispatch(getPeopleSuccess(people))
  } catch(error) {
    // TODO: move this to generic loadAsync creator
    dispatchError(dispatch, error)
  }
}

export const peopleIncreaseVisits = (value: Person)  => {
  return {
    type: PEOPLE_INCREASE_VISIT,
    payload: {value, objectType: PERSON_OBJECT_TYPE}
  }
}
export const setCurrent = (payload: number)  => {

  return {
    type: SET_CURRENT,
    payload
  }
}
