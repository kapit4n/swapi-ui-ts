import { Link, Outlet } from 'react-router-dom'
import "./Layout.css"

export default function Home() {

  return (
    <div className="layout">
      <div className="navbar">
        <Link to="popular"><button>Popular</button></Link>
        <Link to="people"><button>People</button></Link>
        <Link to="planets"><button>Planet</button></Link>
      </div>
      <div className='main-container'>
        <Outlet />
      </div>
    </div>
  )
};
