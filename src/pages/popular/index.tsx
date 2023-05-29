import React, { useEffect } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import List from "../../components/list";
import ListItem from "../../components/list-item";
import { FILM_LIST_FIELDS, FILM_MAIN_ROUTE, FILM_OBJECT_TYPE, FILM_TITLE_FIELD, PERSON_LIST_FIELDS, PERSON_MAIN_ROUTE, PERSON_OBJECT_TYPE, PERSON_TITLE_FIELD } from "../../constants";
import { PLANET_LIST_FIELDS, PLANET_MAIN_ROUTE, PLANET_OBJECT_TYPE, PLANET_TITLE_FIELD } from "../../constants";
import { setCurrentPerson } from "../../actions/people";
import { setCurrentPlanet } from "../../actions/planets";

import { RootReducer } from '../../store';
import { setCurrentFilm } from '../../actions/films';

const basicListItemDataPlaceholder: ListItemData = {
  titleField: "",
  descriptionFields: [""],
  dataSource: {},
  objectType: "",
  mainRoute: ""
}

const peopleListItemDataPlaceholder: ListItemData = {
  titleField: PERSON_TITLE_FIELD,
  descriptionFields: PERSON_LIST_FIELDS,
  dataSource: {},
  objectType: PERSON_OBJECT_TYPE,
  mainRoute: PERSON_MAIN_ROUTE
}

const planetsListItemDataPlaceholder: ListItemData = {
  titleField: PLANET_TITLE_FIELD,
  descriptionFields: PLANET_LIST_FIELDS,
  dataSource: {},
  objectType: PLANET_OBJECT_TYPE,
  mainRoute: PLANET_MAIN_ROUTE
}

const filmsListItemDataPlaceholder: ListItemData = {
  titleField: FILM_TITLE_FIELD,
  descriptionFields: FILM_LIST_FIELDS,
  dataSource: {},
  objectType: FILM_OBJECT_TYPE,
  mainRoute: FILM_MAIN_ROUTE
}

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  popularPeople: state.people.popular,
  popularPlanets: state.planets.popular,
  popularFilms: state.films.popular,
  searchTerm: state.home.searchTerm
});

const mapDispatchToProps = ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface PopularProps extends ConnectedProps<typeof connector> { }

export const Popular: React.FC<PopularProps> = ({ popularPeople, popularPlanets, searchTerm, popularFilms }) => {
  const dispatch = useDispatch()

  const popularPeopleValues = React.useMemo(() => Object.values(popularPeople), [popularPeople])
  const popularPlanetsValues = React.useMemo(() => Object.values(popularPlanets), [popularPlanets])
  const popularFilmsValues = React.useMemo(() => Object.values(popularFilms), [popularFilms])

  const [valuesAfterSearch, setValuesAfterSearch] = React.useState([] as any[])

  const dataPlaceholder = (objectType: string) => {
    switch (objectType) {
      case PERSON_OBJECT_TYPE:
        return peopleListItemDataPlaceholder;
      case PLANET_OBJECT_TYPE:
        return planetsListItemDataPlaceholder;
      case FILM_OBJECT_TYPE:
        return filmsListItemDataPlaceholder;
      default:
        return basicListItemDataPlaceholder;
    }
  }

  const allPopularItems = React.useMemo(() => {
    return popularPeopleValues.concat(popularPlanetsValues).concat(popularFilmsValues).sort((a: any, b: any) => {
      return b.visited - a.visited
    });
  }, [popularPeopleValues, popularPlanetsValues, popularFilmsValues])

  const popularValues = React.useMemo(() => {
    return popularPeopleValues.length > 0 && popularPlanetsValues.length > 0
  }, [popularPeopleValues, popularPlanetsValues])


  const onClickSetCurrentItem = (id: string, objectType: string) => {
    switch (objectType) {
      case PERSON_OBJECT_TYPE:
        dispatch(setCurrentPerson(Number(id)));
        return;
      case PLANET_OBJECT_TYPE:
        dispatch(setCurrentPlanet(Number(id)));
        return;
      case FILM_OBJECT_TYPE:
        dispatch(setCurrentFilm(Number(id)));
        return;
      default:
        return dispatch(setCurrentPlanet(Number(id)));;
    }
  }

  useEffect(() => {
    const filteredValues = allPopularItems.filter(a => {
      let result = false;
      if (a.objectType === FILM_OBJECT_TYPE) {
        result = a.dataSource['title'].toLowerCase().includes(searchTerm)
      } else {
        result = a.dataSource['name'].toLowerCase().includes(searchTerm)
      }

      return result
    })
    setValuesAfterSearch(filteredValues)
  }, [allPopularItems, searchTerm])

  return (
    <>
      {!popularValues && (
        <span> There is any data visited yet go to <Link to={`/${PERSON_MAIN_ROUTE}`}>People</Link> ,  <Link to={`/${PLANET_MAIN_ROUTE}`}>Planets</Link>routes</span>
      )}

      <List title="POPULAR ITEMS">
        {valuesAfterSearch.map((popular: PopularType) => <ListItem data={{ ...dataPlaceholder(popular.objectType), dataSource: { ...(popular.dataSource ? popular.dataSource : {}), visited: popular.visited } }} onClickSetCurrent={onClickSetCurrentItem} />)}
      </List>

    </>
  )
}

export default connector(Popular);