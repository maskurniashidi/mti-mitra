import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import Register_Bussiness_Name from "./pages/Register_Bussiness_Name/Register_Bussiness_Name";
import Register_Password from "./pages/Register_Password/Register_Password";
import Register_Konfirmasi_Email from "./pages/Register_Konfirmasi_Email/Register_Konfirmasi_Email";

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
    name: "Register_Bussiness_Name",
    path: "/register_Bussiness_Name",
    exact: true,
    component: Register_Bussiness_Name,
    restricted: true,
  },
  {
    name: "Register_Password",
    path: "/register_Password",
    exact: true,
    component: Register_Password,
    restricted: true,
  },
  {
    name: "Register_Konfirmasi_Email",
    path: "/register_Konfirmasi_Email",
    exact: true,
    component: Register_Konfirmasi_Email,
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
