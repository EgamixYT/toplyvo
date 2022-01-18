import { createRouter, createWebHistory } from 'vue-router'

//components
import Home from '../views/Home.vue'
import Price from '../views/Price.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Example1 from '../components/example1.vue'
import Example2 from '../components/example2.vue'
import Example3 from '../components/example3.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/price',
    name: 'price',
    component: Price
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
    meta:{
    layout: 'Navbar'
    }
  },
  {
    path: '/example1',
    name: 'example1',
    component: Example1,
    meta:{
    layout: 'Navbar'
    }
  },
  {
    path: '/example2',
    name: 'example2',
    component: Example2,
    meta:{
    layout: 'Navbar'
    }
  },
  {
    path: '/example3',
    name: 'example3',
    component: Example3,
    meta:{
    layout: 'Navbar'
    }
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