import { createRouter, createWebHistory } from 'vue-router'

//components
import Home from '../views/Home.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || {
          left: 0,
          top: 0
        };
      }
})


export default router