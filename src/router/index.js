import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import WhoWeAre from '../pages/WhoWeAre.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/who-we-are', component: WhoWeAre }
]

const router = createRouter({
  history: createWebHistory('/The-Jerusalem-Fund/'),
  routes
})

export default router
