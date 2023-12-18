import { Home, Login } from "../presentation/pages";

const AppRoutes = [
  {
    id: 0,
    path: "/",
    component: Home,
    exact: true,
  },
  {
    id: 1,
    path: "/login",
    component: Login,
    exact: true,
  },
];

export default AppRoutes;
