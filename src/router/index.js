//Imports:
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue"
import StudentPage from "../views/Student/StudentPage.vue"
import StudassPage from "../views/Studass/StudassPage.vue";
import Lecturer from "../views/Admin/Lecturer.vue"
import MeldInnIQS from "../views/Student/MeldInnIQS.vue"
import QueComponent from "../views/Student/QueComponent.vue"
import StudentQueue from "../views/Studass/StudentQueue.vue";

//Oppretter paths til de ulike sidene som blir brukt i applikasjonen
const routes = [
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
    path: "/",
    redirect: "/loginpage",
  },
  {
    path: "/loginpage",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/lecturer",
    name: Lecturer,
    component: Lecturer,
  },
  {
    path: "/toqueue",
    name: MeldInnIQS,
    component: MeldInnIQS,
  },
  {
    path: "/queue",
    name: QueComponent,
    component: QueComponent,
  },
  {
    path: "/studentqueue",
    name: StudentQueue,
    component: StudentQueue,
  }
];

//Oppretter routing
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
