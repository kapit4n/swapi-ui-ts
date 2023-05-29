

import { useEffect } from "react";
import { connect, ConnectedProps } from 'react-redux';
import { useDispatch } from 'react-redux'

import List from "../../components/list";
import ListItem from "../../components/list-item";

import { loadStarships, setCurrentStarship } from "../../actions/starships";
import { RootReducer } from '../../store';
import { STARSHIP_LIST_FIELDS, STARSHIP_TITLE_FIELD, STARSHIP_OBJECT_TYPE, STARSHIP_MAIN_ROUTE } from "../../constants";

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  loading: state.starships.loading,
  list: state.starships.list,
  searchTerm: state.starships.searchTerm
});

const mapDispatchToProps = ({
  loadStarships
});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface FilmListProps extends ConnectedProps<typeof connector> { }

export const FilmList: React.FC<FilmListProps> = ({ list, loadStarships, searchTerm }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    loadStarships(searchTerm)
  }, [searchTerm, loadStarships])

  const listItemDataPlaceholder: ListItemData = {
    titleField: STARSHIP_TITLE_FIELD,
    descriptionFields: STARSHIP_LIST_FIELDS,
    objectType: STARSHIP_OBJECT_TYPE,
    mainRoute: STARSHIP_MAIN_ROUTE,
    dataSource: {}
  }

  const onClickSetCurrent = (id: string) => {
    dispatch(setCurrentStarship(Number(id)))
  }

  return (
    <List title="VEHICLE">
      {list.map((d: Startship) => <ListItem data={{ ...listItemDataPlaceholder, dataSource: d }} onClickSetCurrent={onClickSetCurrent} />)}
    </List>
  )
}

export default connector(FilmList)