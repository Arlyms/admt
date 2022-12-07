import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio'
import Contact from '../views/Contact'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/realisations',
    name: 'portfolio',
    component: Portfolio   
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact   
  }  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
