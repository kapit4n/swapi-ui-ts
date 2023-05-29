

import { useEffect } from "react";
import { connect, ConnectedProps } from 'react-redux';
import { useDispatch } from 'react-redux'

import List from "../../components/list";
import ListItem from "../../components/list-item";

import { loadSpecies, setCurrentSpecie } from "../../actions/species";
import { RootReducer } from '../../store';
import { SPECIE_LIST_FIELDS, SPECIE_TITLE_FIELD, SPECIE_OBJECT_TYPE, SPECIE_MAIN_ROUTE } from "../../constants";

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  loading: state.species.loading,
  list: state.species.list,
  searchTerm: state.species.searchTerm
});

const mapDispatchToProps = ({
  loadSpecies
});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface FilmListProps extends ConnectedProps<typeof connector> { }

export const FilmList: React.FC<FilmListProps> = ({ list, loadSpecies, searchTerm }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    loadSpecies(searchTerm)
  }, [searchTerm, loadSpecies])

  const listItemDataPlaceholder: ListItemData = {
    titleField: SPECIE_TITLE_FIELD,
    descriptionFields: SPECIE_LIST_FIELDS,
    objectType: SPECIE_OBJECT_TYPE,
    mainRoute: SPECIE_MAIN_ROUTE,
    dataSource: {}
  }

  const onClickSetCurrent = (id: string) => {
    dispatch(setCurrentSpecie(Number(id)))
  }

  return (
    <List title="SPECIES">
      {list.map((d: Specie) => <ListItem data={{ ...listItemDataPlaceholder, dataSource: d }} onClickSetCurrent={onClickSetCurrent} />)}
    </List>
  )
}

export default connector(FilmList)