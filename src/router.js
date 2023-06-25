import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./views/AppHome.vue";
import ProjectShow from "./views/ProjectShow.vue";
import errorpage from "./views/errorpage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects/:id",
      name: "project",
      component: ProjectShow,
    },
    {
      path: "/pagenotfound",
      name: "pagenotfound",
      component: errorpage,
    },

  ],
});

export { router };
