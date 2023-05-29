

import { useEffect } from "react";
import { connect, ConnectedProps } from 'react-redux';
import { useDispatch } from 'react-redux'

import List from "../../components/list";
import ListItem from "../../components/list-item";

import { loadPlanets, setCurrentPlanet } from "../../actions/planets";
import { RootReducer } from '../../store';
import { PLANET_LIST_FIELDS, PLANET_TITLE_FIELD, PLANET_IMAGE_PLACEHOLDER, PLANET_OBJECT_TYPE, PLANET_MAIN_ROUTE } from "../../constants";

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  loading: state.planets.loading,
  list: state.planets.list,
});

const mapDispatchToProps = ({
  loadPlanets
});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface PlanetListProps extends ConnectedProps<typeof connector> { }

export const PersonList: React.FC<PlanetListProps> = ({ list, loadPlanets }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    loadPlanets()
  }, [])

  const listItemDataPlaceholder: ListItemData = {
    titleField: PLANET_TITLE_FIELD,
    descriptionFields: PLANET_LIST_FIELDS,
    imagePlaceholder: PLANET_IMAGE_PLACEHOLDER,
    objectType: PLANET_OBJECT_TYPE,
    mainRoute: PLANET_MAIN_ROUTE,
    dataSource: {}
  }

  const onClickSetCurrent = (id: string) => {
    dispatch(setCurrentPlanet(Number(id)))
  }

  return (
    <div>
      <List title="PLANETS">
        {list.map((d: Person) => <ListItem data={{ ...listItemDataPlaceholder, dataSource: d }} route="people" onClickSetCurrent={onClickSetCurrent} />)}
      </List>
    </div>
  )
}

export default connector(PersonList)