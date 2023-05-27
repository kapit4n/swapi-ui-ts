

import { useEffect } from "react";
import { connect, ConnectedProps } from 'react-redux';
import { useDispatch } from 'react-redux'

import List from "../../components/list";
import ListItem from "../../components/list-item";
import { loadPeople, setCurrent } from "../../actions/people";
import { RootReducer } from '../../store';
import { PERSON_FIELDS, PERSON_TITLE_FIELD, PERSON_IMAGE_PLACEHOLDER, PERSON_OBJECT_TYPE, PERSON_MAIN_ROUTE } from "../../constants";

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  loading: state.people.loading,
  list: state.people.list,
});

const mapDispatchToProps = ({
  loadPeople
});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface PersonListProps extends ConnectedProps<typeof connector> { }

export const PersonList: React.FC<PersonListProps> = ({ list, loadPeople }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    loadPeople()
  }, [])

  const listItemDataPlaceholder: ListItemData = {
    titleField: PERSON_TITLE_FIELD,
    descriptionFields: PERSON_FIELDS,
    imagePlaceholder: PERSON_IMAGE_PLACEHOLDER,
    objectType: PERSON_OBJECT_TYPE,
    mainRoute: PERSON_MAIN_ROUTE,
    dataSource: {}
  }

  const onClickSetCurrent = (id: string) => {
    dispatch(setCurrent(Number(id)))
  }

  return (
    <div>
      <List title="PEOPLE">
        {list.map((d: Person) => <ListItem data={{ ...listItemDataPlaceholder, dataSource: d }} route="people" onClickSetCurrent={onClickSetCurrent} />)}
      </List>
    </div>
  )
}

export default connector(PersonList)