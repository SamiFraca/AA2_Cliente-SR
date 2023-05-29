import { createRouter, createWebHistory } from "vue-router";
import {
  Home,
  List,
  Sign,
  Login,
  NameList,
  SportList,
  BarDetails,
  Profile,
} from "../views/index.js";

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
    path: "/:site/details/:itemId/:imgId/:name",
    name: "details",
    component: BarDetails,
    props: true,
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
  {
    path: "/details",
    name: "Details",
    component: BarDetails,
  },
  {
    path: "/account/:itemId",
    name: "Account",
    component: Profile,
    // meta: {
    //   requiresAdmin: true,
    // },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
