import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import List from "../../components/list";
import ListItem from "../../components/list-item";
import { PERSON_FIELDS, PERSON_IMAGE_PLACEHOLDER, PERSON_TITLE_FIELD } from "../../constants";

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
  const popularPeopleValues = Array.from(popularPeople.values()).sort((a, b) => b.visited - a.visited);

  const listItemDataPlaceholder: ListItemData = {
    titleField: PERSON_TITLE_FIELD,
    descriptionFields: [...PERSON_FIELDS, "visited"],
    imagePlaceholder: PERSON_IMAGE_PLACEHOLDER,
    dataSource: {}
  }

  return (
    <div>
      <List title="POPULAR">
        {popularPeopleValues.map((popular) => <ListItem data={{ ...listItemDataPlaceholder, dataSource: { ...popular.dataSource, visited: popular.visited } }} route="people" onClickSetCurrent={() => { }} />)}
      </List>
    </div>
  )
}

export default connector(Popular);