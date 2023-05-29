import { Link, Outlet, useLocation } from 'react-router-dom'
import "./Layout.css"
import InputSearch from '../components/input-search'
import { FILM_IMAGE_PLACEHOLDER, PERSON_IMAGE_PLACEHOLDER, PLANET_IMAGE_PLACEHOLDER, SPECIE_IMAGE_PLACEHOLDER, VEHICLE_IMAGE_PLACEHOLDER } from '../constants'
import { STARSHIP_IMAGE_PLACEHOLDER } from '../constants'

export default function Home() {

  const location = useLocation()

  return (
    <div className="layout">
      <div className="navbar">
        <Link to="/" className={location.pathname === '/' ? "current" : ""}>
          <img src="https://s7200.pcdn.co/wp-content/uploads/2021/02/property-placeholder-1.jpg" />
          <span>Home</span>
        </Link>
        <Link to="/people" className={location.pathname === '/people' ? "current" : ""}>
          <img src={PERSON_IMAGE_PLACEHOLDER} />
          <span>
            People
          </span></Link>
        <Link to="/planets" className={location.pathname === '/planets' ? "current" : ""}>
          <img src={PLANET_IMAGE_PLACEHOLDER} />
          <span>
            Planets
          </span>
        </Link>
        <Link to="/films" className={location.pathname === '/films' ? "current" : ""}>
          <img src={FILM_IMAGE_PLACEHOLDER} />
          <span>
            Films
          </span>
        </Link>
        <Link to="/species" className={location.pathname === '/species' ? "current" : ""}>
          <img src={SPECIE_IMAGE_PLACEHOLDER} />
          <span>
            Species
          </span>
        </Link>
        <Link to="/vehicles" className={location.pathname === '/vehicles' ? "current" : ""}>
          <img src={VEHICLE_IMAGE_PLACEHOLDER} />
          <span>
            Vehicles
          </span>
        </Link>
        <Link to="/starships" className={location.pathname === '/starships' ? "current" : ""}>
          <img src={STARSHIP_IMAGE_PLACEHOLDER} />
          <span>
            Starships
          </span>
        </Link>
      </div>
      <div className='main-container'>
        <InputSearch></InputSearch>
        <Outlet />
      </div>
    </div>
  )
};
