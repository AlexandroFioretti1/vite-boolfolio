import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./views/AppHome.vue";
import ProjectShow from "./views/ProjectShow.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects/:slug",
      name: "projects",
      component: ProjectShow,
    },
  ],
});
export { router };
