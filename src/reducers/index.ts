import {
  GET_PEOPLE,
  PEOPLE_INCREASE_VISIT,
  SET_CURRENT,
} from "../actions/people";
import {
  GET_PLANETS,
  PLANETS_INCREASE_VISIT,
  PLANETS_SET_CURRENT,
} from "../actions/planets";
import { HOME_OR_POPULAR_PAGE, HOME_OR_POPULAR_PAGE_SEARCH_ACTION, PERSON_SEARCH_ACTION } from "../constants";
import { PLANET_SEARCH_ACTION } from "../constants";

type CurrentType = Person | Planet;

const initialState = {
  loading: true,
  list: [],
  popular: {} as KeyValue,
  current: {} as CurrentType,
  searchTerm: "",
};

const homeInitialState = {
  searchTerm: "",
}

type StateProps = typeof initialState;

function getDataReducer(state: StateProps, action: ActionRedux) {
  const peopleCast = action.payload.map((person: CurrentType) => {
    const personTransformed = { ...person };
    personTransformed.id = Number(person.url.split("/").slice(-2)[0]);
    return personTransformed;
  });
  return Object.assign({}, state, { list: peopleCast });
}

function increaseVisitReducer(state: StateProps, action: ActionRedux) {
  const popularObject =
    state.popular[action.payload.value.id + `-${action.payload.objectType}`];

  const newPopularObject = {
    dataSource: action.payload.value,
    visited: popularObject?.visited ? popularObject.visited + 1 : 1,
    objectType: action.payload.objectType,
  };
  return Object.assign({}, state, {
    popular: {
      ...state.popular,
      [action.payload.value.id + `-${action.payload.objectType}`]:
        newPopularObject,
    },
  });
}

function setCurrentReducer(state: StateProps, action: ActionRedux) {
  let current: CurrentType = { ...state.current } as CurrentType;
  if (current.id === action.payload) {
    return state;
  }
  const foundPerson = state.list.find(
    (person: CurrentType) => person.id === Number(action.payload)
  );
  if (foundPerson) {
    current = foundPerson as CurrentType;
  }
  return Object.assign({}, state, { current });
}

export const peopleReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case GET_PEOPLE:
      return getDataReducer(state, action);
    case PEOPLE_INCREASE_VISIT:
      return increaseVisitReducer(state, action);
    case SET_CURRENT:
      return setCurrentReducer(state, action);
    case PERSON_SEARCH_ACTION:
      console.log("XXXXX SEARCH ACTION", action);
      return Object.assign({}, state, {
        searchTerm: action.payload.searchTerm,
      });
    default:
      return state;
  }
};

export const planetsReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case GET_PLANETS:
      return getDataReducer(state, action);
    case PLANETS_INCREASE_VISIT:
      return increaseVisitReducer(state, action);
    case PLANETS_SET_CURRENT:
      return setCurrentReducer(state, action);
    case PLANET_SEARCH_ACTION:
      console.log("XXXXX SEARCH ACTION", action);
      return Object.assign({}, state, {
        searchTerm: action.payload.searchTerm,
      });
    default:
      return state;
  }
};

export const homeReducer = (state = homeInitialState, action: ActionRedux) => {
  switch (action.type) {
    case HOME_OR_POPULAR_PAGE_SEARCH_ACTION:
      return Object.assign({}, state, {
        searchTerm: action.payload.searchTerm,
      });
    default:
      return state;
  }
}
