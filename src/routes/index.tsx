import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layout";
import Popular from "../pages/popular/index";
import People from "../pages/people/List";
import Planets from "../pages/planets/List";
import Films from "../pages/films/List";
import Species from "../pages/species/List";
import Vehicles from "../pages/vehicles/List";
import Starships from "../pages/starships/List";
import PersonDetails from "../pages/people/Details";
import PlanetsDetails from "../pages/planets/Details";
import FilmsDetails from "../pages/films/Details";
import SpeciesDetails from "../pages/species/Details";
import VehiclesDetails from "../pages/vehicles/Details";
import StarshipsDetails from "../pages/starships/Details";

export const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        path:"/",
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
        path:"/films",
        element: <Films />
      },
      {
        path:"/species",
        element: <Species />
      },
      {
        path:"/vehicles",
        element: <Vehicles />
      },
      {
        path:"/starships",
        element: <Starships />
      },
      {
        path:"people/details/:id",
        element: <PersonDetails />
      },
      {
        path:"planets/details/:id",
        element: <PlanetsDetails />
      },
      {
        path:"films/details/:id",
        element: <FilmsDetails />
      },
      {
        path:"species/details/:id",
        element: <SpeciesDetails />
      },
      {
        path:"vehicles/details/:id",
        element: <VehiclesDetails />
      },
      {
        path:"starships/details/:id",
        element: <StarshipsDetails />
      },
    ]
  },
]);
