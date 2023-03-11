import { createRouter, createWebHistory } from "vue-router";
import { Home, List, Sign } from "../views/index.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    name: "List",
    component: List,
  },
  {
    path: "/sign",
    name: "Sign",
    component: Sign,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
