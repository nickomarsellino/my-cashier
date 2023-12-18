import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));

export { Home, Login }