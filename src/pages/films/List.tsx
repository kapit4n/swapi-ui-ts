

import { useEffect } from "react";
import { connect, ConnectedProps } from 'react-redux';
import { useDispatch } from 'react-redux'

import List from "../../components/list";
import ListItem from "../../components/list-item";

import { loadFilms, setCurrentFilm } from "../../actions/films";
import { RootReducer } from '../../store';
import { FILM_LIST_FIELDS, FILM_TITLE_FIELD, FILM_OBJECT_TYPE, FILM_MAIN_ROUTE } from "../../constants";

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  loading: state.films.loading,
  list: state.films.list,
  searchTerm: state.films.searchTerm
});

const mapDispatchToProps = ({
  loadFilms
});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface FilmListProps extends ConnectedProps<typeof connector> { }

export const FilmList: React.FC<FilmListProps> = ({ list, loadFilms, searchTerm }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    loadFilms(searchTerm)
  }, [searchTerm, loadFilms])

  const listItemDataPlaceholder: ListItemData = {
    titleField: FILM_TITLE_FIELD,
    descriptionFields: FILM_LIST_FIELDS,
    objectType: FILM_OBJECT_TYPE,
    mainRoute: FILM_MAIN_ROUTE,
    dataSource: {}
  }

  const onClickSetCurrent = (id: string) => {
    dispatch(setCurrentFilm(Number(id)))
  }

  return (
    <List title="FILMS">
      {list.map((d: Film) => <ListItem data={{ ...listItemDataPlaceholder, dataSource: d }} onClickSetCurrent={onClickSetCurrent} />)}
    </List>
  )
}

export default connector(FilmList)