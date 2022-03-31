import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import LoginPage from "@/views/LoginPage.vue"
import StudentPage from "../views/Student/StudentPage.vue"
import StudassPage from "../views/Studass/StudassPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/student",
    name: "StudentPage",
    component: StudentPage,
  },
  {
    path: "/studass",
    name: StudassPage,
    component: StudassPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
