import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./views/AppHome.vue";
import ProjectShow from "./views/ProjectShow.vue";
import ErrorPage from "./views/ErrorPage.vue";
import ProjectsView from "./views/ProjectsView.vue";
import ContactsView from "./views/ContactsView.vue";

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
      component: ErrorPage,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsView,
    },
  ],
});

export { router };
