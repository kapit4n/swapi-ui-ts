import { GET_PEOPLE, INCREASE_VISIT, SET_CURRENT } from "../actions/people"

interface PopularType {
  visited: number,
  dataSource: Person
}

const initialState = {
  loading: true,
  list: [],
  popular: new Map<string, PopularType>(),
  current: {} as any,
}

export const peopleReducer = (state = initialState, action: ActionRedux) => {

  switch(action.type) {
    case GET_PEOPLE:
      const peopleCast = action.payload.map((person: Person) => {
        const personTransformed = {...person}
        personTransformed.id = Number(person.url.split("/").slice(-2)[0])
        return personTransformed
      })
      return Object.assign({}, state, {list: peopleCast})
    case INCREASE_VISIT:
      const popularObject = state.popular.get(action.payload.id)

      const popularMap = state.popular.set(action.payload.id, {dataSource: action.payload, visited: popularObject?.visited ? popularObject.visited + 1: 1})
      console.log(popularMap)
      return Object.assign({}, state, {popular: popularMap})
    case SET_CURRENT:
      let current = {...state.current}
      if (Number(current.id) === Number(action.payload)) {
        return state;
      }
      current = state.list.find((person: Person) => person.id === Number(action.payload));
      console.log(current)
      return Object.assign({}, state, {current});
    default:
      return state;
  }
}