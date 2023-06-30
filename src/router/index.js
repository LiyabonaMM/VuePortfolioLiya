import { createRouter, createWebHistory } from "vue-router"
import Landing from "../components/Landing.vue"
import About from "../components/About.vue"
import WorkEducation from "../components/WorkEducation.vue"
import Skills from "../components/Skills.vue"
import Projects from "../components/Projects.vue"
import Testimonials from "../components/Testimonials.vue"
import Contact from "../components/Contact.vue"

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/work-education",
    name: "WorkEducation",
    component: WorkEducation,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
