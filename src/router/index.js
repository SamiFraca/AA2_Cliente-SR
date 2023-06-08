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
  Admin,
  ModifyBar
} from "../views/index.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/locations/search/:searchquery",
    name: "Location",
    component: List,
  },
  {
    path: "/sign",
    name: "Sign",
    component: Sign,
  },
  {
    path: "/:site/details/:itemId/:name",
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
    path: "/names/search/:searchquery",
    name: "Name",
    component: NameList,
  },
  {
    path: "/sports/search/:searchquery",
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
  {
    path: "/account/:itemId/admin",
    name: "admin",
    component: Admin
  },
  {
    path: "/account/:itemId/admin/:barId",
    name: "Modify",
    component: ModifyBar
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
