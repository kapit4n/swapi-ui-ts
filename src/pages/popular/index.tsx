import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import List from "../../components/list";
import ListItem from "../../components/list-item";
import { PERSON_LIST_FIELDS, PERSON_IMAGE_PLACEHOLDER, PERSON_MAIN_ROUTE, PERSON_OBJECT_TYPE, PERSON_TITLE_FIELD } from "../../constants";
import { PLANET_LIST_FIELDS, PLANET_IMAGE_PLACEHOLDER, PLANET_MAIN_ROUTE, PLANET_OBJECT_TYPE, PLANET_TITLE_FIELD } from "../../constants";

import { RootReducer } from '../../store';

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  popularPeople: state.people.popular,
  popularPlanets: state.planets.popular,
});

const mapDispatchToProps = ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface PopularProps extends ConnectedProps<typeof connector> { }

export const Popular: React.FC<PopularProps> = ({ popularPeople, popularPlanets }) => {

  // cast values and sort them
  const popularPeopleValues = Object.values(popularPeople).sort((a: any, b: any) => {
    return b.visited - a.visited
  });
  // cast values and sort them
  const popularPlanetsValues = Object.values(popularPlanets).sort((a: any, b: any) => {
    return b.visited - a.visited
  });

  console.log(popularPeople, "popularPeople")
  console.log(popularPeopleValues, "popularPeopleValues")
  console.log(popularPlanets, "popularPlanets")
  console.log(popularPlanetsValues, "popularPlanetsValues")

  const peopleListItemDataPlaceholder: ListItemData = {
    titleField: PERSON_TITLE_FIELD,
    descriptionFields: PERSON_LIST_FIELDS,
    imagePlaceholder: PERSON_IMAGE_PLACEHOLDER,
    dataSource: {},
    objectType: PERSON_OBJECT_TYPE,
    mainRoute: PERSON_MAIN_ROUTE
  }

  const planetsListItemDataPlaceholder: ListItemData = {
    titleField: PLANET_TITLE_FIELD,
    descriptionFields: PLANET_LIST_FIELDS,
    imagePlaceholder: PLANET_IMAGE_PLACEHOLDER,
    dataSource: {},
    objectType: PLANET_OBJECT_TYPE,
    mainRoute: PLANET_MAIN_ROUTE
  }

  return (
    <div>
      <List title="POPULAR PEOPLE">
        {popularPeopleValues.map((popular: any) => <ListItem data={{ ...peopleListItemDataPlaceholder, dataSource: { ...popular.dataSource, visited: popular.visited } }} route="people" onClickSetCurrent={() => { }} />)}
      </List>
      <List title="POPULAR PLANETS">
        {popularPlanetsValues.map((popular: any) => <ListItem data={{ ...planetsListItemDataPlaceholder, dataSource: { ...popular.dataSource, visited: popular.visited } }} route="planets" onClickSetCurrent={() => { }} />)}
      </List>

    </div>
  )
}

export default connector(Popular);