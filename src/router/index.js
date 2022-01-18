import { createRouter, createWebHistory } from 'vue-router'

//components
import Home from '../views/Home.vue'
import Ver from '../views/Verification.vue'
import Val from '../views/Validation.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/verification',
    name: 'verification',
    component: Ver
  },
  {
    path: '/validation',
    name: 'validation',
    component: Val
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