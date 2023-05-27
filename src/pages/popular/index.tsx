import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import List from "../../components/list";
import ListItem from "../../components/list-item";
import { PERSON_FIELDS, PERSON_IMAGE_PLACEHOLDER, PERSON_MAIN_ROUTE, PERSON_OBJECT_TYPE, PERSON_TITLE_FIELD } from "../../constants";

import { RootReducer } from '../../store';

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  popularPeople: state.people.popular,
});

const mapDispatchToProps = ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface PopularProps extends ConnectedProps<typeof connector> { }

export const Popular: React.FC<PopularProps> = ({ popularPeople }) => {

  // cast values and sort them
  const popularPeopleValues = Object.values(popularPeople).sort((a: any, b: any) => {
    return b.visited - a.visited
  });

  console.log(popularPeople, "popularPeople")
  console.log(popularPeopleValues, "popularPeopleValues")

  const listItemDataPlaceholder: ListItemData = {
    titleField: PERSON_TITLE_FIELD,
    descriptionFields: [...PERSON_FIELDS, "visited"],
    imagePlaceholder: PERSON_IMAGE_PLACEHOLDER,
    dataSource: {},
    objectType: PERSON_OBJECT_TYPE,
    mainRoute: PERSON_MAIN_ROUTE
  }

  return (
    <div>
      <List title="POPULAR">
        {popularPeopleValues.map((popular: any) => <ListItem data={{ ...listItemDataPlaceholder, dataSource: { ...popular.dataSource, visited: popular.visited } }} route="people" onClickSetCurrent={() => { }} />)}
      </List>
    </div>
  )
}

export default connector(Popular);