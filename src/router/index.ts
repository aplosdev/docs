import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DemoView from "../views/DemoView.vue";
import VueView from "../views/VueView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/BlogView.vue"),
    },
    {
      path: "/demo",
      name: "demo",
      component: DemoView,
    },
    {
      path: "/docs/vue",
      name: "vue",
      component: VueView,
    },
    {
      path: "/docs/css",
      name: "css",
      component: () => import("../views/CssView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/404View.vue"),
    },
  ],
});

export default router;
