import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";

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
    name: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    private: true,
  },
];
