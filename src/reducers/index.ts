import { GET_PEOPLE, INCREASE_VISIT, SET_CURRENT } from "../actions/people"

type CurrentType = Person | Planet

const initialState = {
  loading: true,
  list:  [] as Person[],
  popular: {} as KeyValue,
  current: {} as CurrentType,
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
      const popularObject = state.popular[action.payload.id + "-people"]

      const newPopularObject = {dataSource: action.payload, visited: popularObject?.visited ? popularObject.visited + 1: 1}
      return Object.assign({}, state, {popular: {...state.popular, [action.payload.id + "-people"]: newPopularObject}})
    case SET_CURRENT:
      let current: Person = {...state.current} as Person
      
      if (current.id === action.payload) {
        return state;
      }

      const foundPerson = state.list.find((person: Person) => person.id === Number(action.payload))

      if (foundPerson) {
        current =  foundPerson as Person;
      }
      return Object.assign({}, state, {current});
    default:
      return state;
  }
}