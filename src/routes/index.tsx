import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layout";
import Popular from "../pages/popular/index";
import People from "../pages/people/List";
import Planets from "../pages/planets/List";
import Films from "../pages/films/List";
import PersonDetails from "../pages/people/Details";
import PlanetsDetails from "../pages/planets/Details";
import FilmsDetails from "../pages/films/Details";

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
    ]
  },
]);
