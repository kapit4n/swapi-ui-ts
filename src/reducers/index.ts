
import { HOME_OR_POPULAR_PAGE_SEARCH_ACTION } from "../constants";

type CurrentType = Person | Planet | Film | Specie | Vehicle;

export const initialState = {
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

export function getDataReducer(state: StateProps, action: ActionRedux) {
  const peopleCast = action.payload.map((data: CurrentType) => {
    const personTransformed = { ...data };
    personTransformed.id = Number(data.url.split("/").slice(-2)[0]);
    return personTransformed;
  });
  return Object.assign({}, state, { list: peopleCast });
}

export function increaseVisitReducer(state: StateProps, action: ActionRedux) {
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

export function setCurrentReducer(state: StateProps, action: ActionRedux) {
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
