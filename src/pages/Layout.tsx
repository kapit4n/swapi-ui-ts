import { Link, Outlet, useLocation } from 'react-router-dom'
import "./Layout.css"
import InputSearch from '../components/input-search'

export default function Home() {

  const location = useLocation()

  return (
    <div className="layout">
      <div className="navbar">
        <Link to="/" className={location.pathname === '/'? "current": ""}>Home</Link>
        <Link to="/people"  className={location.pathname === '/people'? "current": ""}>People</Link>
        <Link to="/planets"  className={location.pathname === '/planets'? "current": ""}>Planets</Link>
        <Link to="/films"  className={location.pathname === '/films'? "current": ""}>Films</Link>
        <Link to="/species"  className={location.pathname === '/species'? "current": ""}>Species</Link>
        <Link to="/vehicles"  className={location.pathname === '/vehicles'? "current": ""}>Vehicles</Link>
        <Link to="/starships"  className={location.pathname === '/starships'? "current": ""}>Starships</Link>
      </div>
      <div className='main-container'>
        <InputSearch></InputSearch>
        <Outlet />
      </div>
    </div>
  )
};
