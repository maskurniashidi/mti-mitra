import Login from "../pages/Auth/Login/Login";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Register from "../pages/Auth/Register/Register";
import Hotel from "../pages/Property/Hotel/Hotel";

export const APP_ROUTE = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home,
    restricted: true,
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: Login,
    restricted: true,
  },
  {
    name: "Register",
    path: "/register",
    exact: true,
    component: Register,
    restricted: true,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    private: true,
  },
  {
    name: "Hotel",
    path: "/hotel",
    exact: false,
    component: Hotel,
    restricted: false,
  },
];
