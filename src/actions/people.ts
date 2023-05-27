import axios from 'axios';
import { Dispatch } from 'redux';

export const GET_PEOPLE = "GET_PEOPLE"
export const INCREASE_VISIT = "INCREASE_VISIT"
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

export const loadPeople = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people`)
    const people = res.data.results;
    dispatch(getPeopleSuccess(people))
  } catch(error) {
    dispatchError(dispatch, error)
  }
}

export const increaseVisits = (payload: Person)  => {
  return {
    type: INCREASE_VISIT,
    payload
  }
}
export const setCurrent = (payload: number)  => {

  return {
    type: SET_CURRENT,
    payload
  }
}
