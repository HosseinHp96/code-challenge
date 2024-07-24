import { Navigate, RouteObject } from "react-router-dom";
import * as Pages from "../pages";

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/users" />,
  },

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
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default Routes;
