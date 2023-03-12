import { createRouter, createWebHistory } from "vue-router";
import { Home, List, Sign, Login, NameList,SportList } from "../views/index.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/locations",
    name: "Location",
    component: List,
  },
  {
    path: "/sign",
    name: "Sign",
    component: Sign,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/names",
    name: "Name",
    component: NameList,
  },
  {
    path: "/sports",
    name: "Sport",
    component: SportList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
