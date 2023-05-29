import React, { useEffect, useMemo } from 'react'
import {
  useLocation
} from "react-router-dom";
import { ConnectedProps, connect, useDispatch } from 'react-redux';
import { FILM_OBJECT_TYPE, FILM_SEARCH_ACTION, HOME_OR_POPULAR_PAGE, HOME_OR_POPULAR_PAGE_SEARCH_ACTION, PERSON_OBJECT_TYPE, PERSON_SEARCH_ACTION, PLANET_OBJECT_TYPE, PLANET_SEARCH_ACTION, SPECIE_OBJECT_TYPE, SPECIE_SEARCH_ACTION, VEHICLE_OBJECT_TYPE, VEHICLE_SEARCH_ACTION } from '../../constants';
import { loadPeople } from '../../actions/people';
import { loadPlanets } from '../../actions/planets';
import { RootReducer } from '../../store';
import "./index.css"

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  searchTermPeople: state.people.searchTerm,
  searchTermPlanets: state.planets.searchTerm,
  searchTermFilms: state.films.searchTerm,
  searchTermSpecies: state.species.searchTerm,
  searchTermVehicles: state.vehicles.searchTerm,
  searchTermHome: state.home.searchTerm,
});

const mapDispatchToProps = ({
  loadPeople,
  loadPlanets
});

const connector = connect(mapStateToProps, mapDispatchToProps);
interface InputSearchProps extends ConnectedProps<typeof connector> { }


export const InputSearch: React.FC<InputSearchProps> = ({ searchTermPeople, searchTermPlanets, searchTermHome, searchTermFilms, searchTermSpecies, searchTermVehicles }) => {

  const [searchTerm, setSearchTerm] = React.useState("")
  let location = useLocation();
  const dispatch = useDispatch();

  const displaySearchInput = useMemo(() => {
    if (location.pathname.includes("details")) {
      return false
    }
    return true
  }, [location])

  const objectType = React.useMemo(() => {
    const containsPeople = location.pathname.includes(PERSON_OBJECT_TYPE)
    const containsPlanet = location.pathname.includes(PLANET_OBJECT_TYPE)
    const containsFilm = location.pathname.includes(FILM_OBJECT_TYPE)
    const containsSpecies = location.pathname.includes(SPECIE_OBJECT_TYPE)
    const containsVehicles = location.pathname.includes(VEHICLE_OBJECT_TYPE)
    const isHome = location.pathname == "/"
    
    if (containsPeople) {
      return PERSON_OBJECT_TYPE;
    }

    if (containsPlanet) {
      return PLANET_OBJECT_TYPE
    }

    if (containsFilm) {
      return FILM_OBJECT_TYPE
    }
    
    if (containsSpecies) {
      return SPECIE_OBJECT_TYPE
    }

    if (containsVehicles) {
      return VEHICLE_OBJECT_TYPE
    }

    if (isHome) {
      return HOME_OR_POPULAR_PAGE
    }

    return ""
  }, [location])

  // reset the searchterm
  useEffect(() => {
    switch (objectType) {
      case PERSON_OBJECT_TYPE:
        setSearchTerm(searchTermPeople || "")
        return;
      case PLANET_OBJECT_TYPE:
        setSearchTerm(searchTermPlanets || "");
        return;
        
      case FILM_OBJECT_TYPE:
        setSearchTerm(searchTermFilms || "");
        return;

      case SPECIE_OBJECT_TYPE:
        setSearchTerm(searchTermSpecies || "");
        return;
        
      case VEHICLE_OBJECT_TYPE:
        setSearchTerm(searchTermVehicles || "");
        return;

      case HOME_OR_POPULAR_PAGE:
        setSearchTerm(searchTermHome)
        return;
    }
  }, [location, objectType, searchTermPeople, searchTermPlanets, searchTermHome, searchTermFilms, searchTermSpecies, searchTermVehicles])


  const searchOnThePage = () => {
    switch (objectType) {
      case PERSON_OBJECT_TYPE:
        dispatch({ type: PERSON_SEARCH_ACTION, payload: { searchTerm } });
        return;
      case PLANET_OBJECT_TYPE:
        dispatch({ type: PLANET_SEARCH_ACTION, payload: { searchTerm } });
        return;
      
      case FILM_OBJECT_TYPE:
        dispatch({ type: FILM_SEARCH_ACTION, payload: { searchTerm } });
        return;
      
      
      case VEHICLE_OBJECT_TYPE:
        dispatch({ type: VEHICLE_SEARCH_ACTION, payload: { searchTerm } });
        return;
      
      
      case SPECIE_OBJECT_TYPE:
        dispatch({ type: SPECIE_SEARCH_ACTION, payload: { searchTerm } });
        return;
      
      case HOME_OR_POPULAR_PAGE:
        dispatch({ type: HOME_OR_POPULAR_PAGE_SEARCH_ACTION, payload: { searchTerm } });
    }
  }

  const onResetSearchInput = () => {
    setSearchTerm("")
    switch (objectType) {
      case PERSON_OBJECT_TYPE:
        dispatch({ type: PERSON_SEARCH_ACTION, payload: { searchTerm: "" } });
        return;
      case PLANET_OBJECT_TYPE:
        dispatch({ type: PLANET_SEARCH_ACTION, payload: { searchTerm: "" } });
        return;
      
      case FILM_OBJECT_TYPE:
        dispatch({ type: FILM_SEARCH_ACTION, payload: { searchTerm: "" } });
        return;
      
      
      case SPECIE_OBJECT_TYPE:
        dispatch({ type: SPECIE_SEARCH_ACTION, payload: { searchTerm: "" } });
        return;
      
      
      case VEHICLE_OBJECT_TYPE:
        dispatch({ type: VEHICLE_SEARCH_ACTION, payload: { searchTerm: "" } });
        return;
      
      case HOME_OR_POPULAR_PAGE:
        dispatch({ type: HOME_OR_POPULAR_PAGE_SEARCH_ACTION, payload: { searchTerm: "" } });
    }
  }

  return (
    <>
      {displaySearchInput && (
        <div className='search-input'>
          <input value={searchTerm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} placeholder='Search'/>
          <button onClick={searchOnThePage}>Search</button>
          <button onClick={onResetSearchInput}>Reset</button>
        </div>
      )}
    </>
  )
}

export default connector(InputSearch)