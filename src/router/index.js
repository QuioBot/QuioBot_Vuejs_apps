import { createWebHistory, createRouter } from "vue-router";

// import Home01 from "../pages/Home01";
import Page404 from "../pages/404";

import ChatBot from "../pages/ChatBot";
import SearchBar from "../pages/SearchBar";
import Customer from "../pages/Customer";
import Platform from "../pages/Platform";



const routes = [
  { path: "/", component: Page404},
  { path: "/chatbot", component: ChatBot},
  { path: "/searchbar", component: SearchBar},
  { path: "/:catchAll(.*)", component: Page404},
  { path: "/customer", component: Customer},
  { path: "/platform", component: Platform},


];

const router = createRouter({
  history: createWebHistory(),
  // linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
