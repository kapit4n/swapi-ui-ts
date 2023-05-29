

import { useEffect } from "react";
import { connect, ConnectedProps } from 'react-redux';
import { useDispatch } from 'react-redux'

import List from "../../components/list";
import ListItem from "../../components/list-item";

import { loadVehicles, setCurrentVehicle } from "../../actions/vehicles";
import { RootReducer } from '../../store';
import { VEHICLE_LIST_FIELDS, VEHICLE_TITLE_FIELD, VEHICLE_OBJECT_TYPE, VEHICLE_MAIN_ROUTE } from "../../constants";

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  loading: state.vehicles.loading,
  list: state.vehicles.list,
  searchTerm: state.vehicles.searchTerm
});

const mapDispatchToProps = ({
  loadVehicles
});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface FilmListProps extends ConnectedProps<typeof connector> { }

export const FilmList: React.FC<FilmListProps> = ({ list, loadVehicles, searchTerm }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    loadVehicles(searchTerm)
  }, [searchTerm, loadVehicles])

  const listItemDataPlaceholder: ListItemData = {
    titleField: VEHICLE_TITLE_FIELD,
    descriptionFields: VEHICLE_LIST_FIELDS,
    objectType: VEHICLE_OBJECT_TYPE,
    mainRoute: VEHICLE_MAIN_ROUTE,
    dataSource: {}
  }

  const onClickSetCurrent = (id: string) => {
    dispatch(setCurrentVehicle(Number(id)))
  }

  return (
    <List title="VEHICLE">
      {list.map((d: Vehicle) => <ListItem key={`vehicles-${d.id}`}  data={{ ...listItemDataPlaceholder, dataSource: d }} onClickSetCurrent={onClickSetCurrent} />)}
    </List>
  )
}

export default connector(FilmList)