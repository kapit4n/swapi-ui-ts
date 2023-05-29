import Home from "../pages/Layout";
import { createBrowserRouter } from "react-router-dom"
import People from "../pages/people/List";
import Planets from "../pages/planets/List";
import Popular from "../pages/popular/index";
import PersonDetails from "../pages/people/Details";
import PlanetDetails from "../pages/planets/Details";

export const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
    children: [
      {
        path:"/popular",
        element: <Popular />
      },
      {
        path:"/people",
        element: <People />
      },
      {
        path:"/planets",
        element: <Planets />
      },
      {
        path:"people/details/:id",
        element: <PersonDetails />
      },
      {
        path:"planets/details/:id",
        element: <PlanetDetails />
      },
    ]
  },
]);
