import { createRouter, createWebHistory } from 'vue-router'

//views
import Home from '../views/Home.vue'
import Ver from '../views/Verification.vue'
import Val from '../views/Validation.vue'
import Buy from '../views/Buy.vue'
import Pay from '../views/Pay.vue'

//components
import Card1 from '../components/card1.vue'


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
  {
    path: '/buy',
    name: 'buy',
    component: Buy
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Card1,
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay,
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