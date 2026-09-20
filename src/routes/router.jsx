import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import AllEquipment from "../pages/AllEquipment";
import AddEquipment from "../pages/AddEquipment";
import MyEquipment from "../pages/MyEquipment";
import ViewDetails from "../pages/ViewDetails";
import UpdateEquipment from "../pages/UpdateEquipment";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layouot/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/all-equipment", element: <AllEquipment /> },
      { path: "/equipment/:id", element: <PrivateRoute><ViewDetails /></PrivateRoute> },
      { path: "/add-equipment", element: <PrivateRoute><AddEquipment /></PrivateRoute> },
      { path: "/my-equipment", element: <PrivateRoute><MyEquipment /></PrivateRoute> },
      { path: "/update-equipment/:id", element: <PrivateRoute><UpdateEquipment /></PrivateRoute> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ]
  }
]);