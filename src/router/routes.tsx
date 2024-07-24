import { Navigate, RouteObject } from "react-router-dom";
import * as Pages from "../pages";

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/user-list" />,
  },

  {
    path: "/user-list",
    element: <Pages.UserList />,
  },

  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default Routes;
