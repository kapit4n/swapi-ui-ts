import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from './App';
import { initialState } from './reducers';

jest.mock('axios');

const mockStore = configureMockStore();

const mockedInitialState = {
  ...initialState, popular: [{
    "dataSource": {
      "name": "Tatooine",
      "rotation_period": "23",
      "orbital_period": "304",
      "diameter": "10465",
      "climate": "arid",
      "gravity": "1 standard",
      "terrain": "desert",
      "surface_water": "1",
      "population": "200000",
      "residents": [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
        "https://swapi.dev/api/people/4/",
        "https://swapi.dev/api/people/6/",
        "https://swapi.dev/api/people/7/",
        "https://swapi.dev/api/people/8/",
        "https://swapi.dev/api/people/9/",
        "https://swapi.dev/api/people/11/",
        "https://swapi.dev/api/people/43/",
        "https://swapi.dev/api/people/62/"
      ],
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-09T13:50:49.641000Z",
      "edited": "2014-12-20T20:58:18.411000Z",
      "url": "https://swapi.dev/api/planets/1/",
      "imgPlaceholder": "https://cdn2.iconfinder.com/data/icons/vacation-51/512/planet_earth_map_placeholder_position_pin-512.png",
      "id": 1
    },
    "visited": 20,
    "objectType": "planets"
  }]
}

const mockedInitialStateEmptyPopularValues = {
  ...initialState, popular: []
}

const store = mockStore({ people: mockedInitialState, planets: mockedInitialState, films: mockedInitialState, species: mockedInitialState, vehicles: mockedInitialState, starships: mockedInitialState, home: mockedInitialState, });
const storeWithEmptyPopularValues = mockStore({ people: mockedInitialStateEmptyPopularValues, planets: mockedInitialStateEmptyPopularValues, films: mockedInitialStateEmptyPopularValues, species: mockedInitialStateEmptyPopularValues, vehicles: mockedInitialStateEmptyPopularValues, starships: mockedInitialStateEmptyPopularValues, home: mockedInitialStateEmptyPopularValues, });

describe("With empty popular values", () => {
  it('renders links and help links ones', () => {
    render(<Provider store={storeWithEmptyPopularValues}><App /></Provider>);
    expect(screen.queryAllByText(/People/i).length).toBe(2);
    expect(screen.queryAllByText(/Popular/i).length).toBe(1);
    expect(screen.queryAllByText(/Planets/i).length).toBe(2);
  });
})

describe("With popular values", () => {
  it('renders links', () => {
    render(<Provider store={store}><App /></Provider>);
    expect(screen.getByText(/Popular/i)).toBeInTheDocument();
    expect(screen.getByText(/People/i)).toBeInTheDocument();
    expect(screen.getByText(/Planets/i)).toBeInTheDocument();
  });
})

