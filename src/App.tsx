import React from "react";
import AppRouter from "./router";
import { RouterProvider } from "react-router-dom";

const App: React.FC = () => {
  return <RouterProvider router={AppRouter} />;
};

export default App;
