import React from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import List from "../../components/list";
import ListItem from "../../components/list-item";
import { PERSON_LIST_FIELDS, PERSON_MAIN_ROUTE, PERSON_OBJECT_TYPE, PERSON_TITLE_FIELD } from "../../constants";
import { PLANET_LIST_FIELDS, PLANET_MAIN_ROUTE, PLANET_OBJECT_TYPE, PLANET_TITLE_FIELD } from "../../constants";
import { setCurrentPerson } from "../../actions/people";
import { setCurrentPlanet } from "../../actions/planets";

import { RootReducer } from '../../store';

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

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  popularPeople: state.people.popular,
  popularPlanets: state.planets.popular,
});

const mapDispatchToProps = ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface PopularProps extends ConnectedProps<typeof connector> { }

export const Popular: React.FC<PopularProps> = ({ popularPeople, popularPlanets }) => {
  const dispatch = useDispatch()

  // cast values and sort them
  const popularPeopleValues = Object.values(popularPeople)
  // cast values and sort them
  const popularPlanetsValues = Object.values(popularPlanets)

  const dataPlaceholder = (objectType: string) => {
    switch (objectType) {
      case PERSON_OBJECT_TYPE:
        return peopleListItemDataPlaceholder;
      case PLANET_OBJECT_TYPE:
        return planetsListItemDataPlaceholder;
      default:
        return basicListItemDataPlaceholder;
    }
  }

  const popularValues = React.useMemo(() => {
    return popularPeopleValues.length > 0  && popularPlanetsValues.length > 0
  }, [popularPeopleValues, popularPlanetsValues])

  const onClickSetCurrentItem = (id: string, objectType: string) => {
    switch (objectType) {
      case PERSON_OBJECT_TYPE:
        dispatch(setCurrentPerson(Number(id)));
        return;
      case PLANET_OBJECT_TYPE:
        dispatch(setCurrentPlanet(Number(id)));
        return;
        default:
          return dispatch(setCurrentPlanet(Number(id)));;
    }
  }

  const allPopularItems = React.useMemo(() => {
    return popularPeopleValues.concat(popularPlanetsValues).sort((a: any, b: any) => {
      return b.visited - a.visited
    });
  }, [popularPeopleValues, popularPlanetsValues])

  return (
    <div>
      {!popularValues && (
        <span> There is any data visited yet go to <Link to={`/${PERSON_MAIN_ROUTE}`}>People</Link> ,  <Link to={`/${PLANET_MAIN_ROUTE}`}>Planets</Link>routes</span>
      )}

      <List title="POPULAR ITEMS">
        {allPopularItems.map((popular: PopularType) => <ListItem data={{...dataPlaceholder(popular.objectType), dataSource: { ...(popular.dataSource ? popular.dataSource: {}) , visited: popular.visited } }} onClickSetCurrent={onClickSetCurrentItem} />)}
      </List>

    </div>
  )
}

export default connector(Popular);