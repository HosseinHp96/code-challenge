import { Navigate, RouteObject } from "react-router-dom";
import { Layout } from "../components";
import * as Pages from "../pages";

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/users" />,
  },

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/users",
        element: <Pages.Users />,
      },

      {
        path: "/create",
        element: <Pages.UserForm />,
      },

      {
        path: "/edit/:userName",
        element: <Pages.UserForm />,
      },

      {
        path: "/fibonacci",
        element: <Pages.Fibonacci />,
      },

      {
        path: "/collatz",
        element: <Pages.Collatz />,
      },

      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];

export default Routes;
