import Home from "../pages/Layout";
import { createBrowserRouter } from "react-router-dom"
import People from "../pages/people/List";
import Popular from "../pages/popular/index";
import Details from "../pages/people/Details";

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
        path:"people/details/1",
        element: <Details />
      },
    ]
  },
]);
