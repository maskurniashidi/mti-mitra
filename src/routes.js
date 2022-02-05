import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import Register_Bussiness_Name from "./pages/Register_Bussiness_Name/Register_Bussiness_Name";
import Register_Password from "./pages/Register_Password/Register_Password";
import Register_Konfirmasi_Email from "./pages/Register_Konfirmasi_Email/Register_Konfirmasi_Email";
import Register_Terkonfirmasi from "./pages/Register_Terkonfirmasi/Register_Terkonfirmasi";
import HotelInformasiUmum from "./pages/Hotel/Informasi_Umum";
import HotelDataTambahan from "./pages/Hotel/Data_Tambahan";
import HotelInformasiKamar from "./pages/Hotel/Informasi_Kamar";
import HotelInformasiPembayaran from "./pages/Hotel/Informasi_Pembayaran";

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
  },,
  {
    name: "Register_Terkonfirmasi",
    path: "/register_Terkonfirmasi",
    exact: true,
    component: Register_Terkonfirmasi,
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
    name: "HotelInformasiUmum",
    path: "/hotel/1",
    exact: true,
    component: HotelInformasiUmum,
    restricted: true,
  },
  {
    name: "HotelDataTambahan",
    path: "/hotel/2",
    exact: true,
    component: HotelDataTambahan,
    restricted: true,
  },
  {
    name: "HotelInformasiKamar",
    path: "/hotel/3",
    exact: true,
    component: HotelInformasiKamar,
    restricted: true,
  },
  {
    name: "HotelInformasiPembayaran",
    path: "/hotel/4",
    exact: true,
    component: HotelInformasiPembayaran,
    restricted: true,
  },
];
