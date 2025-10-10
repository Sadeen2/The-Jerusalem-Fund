import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import WhoWeAre from '../pages/WhoWeAre.vue'
import History from '../pages/History.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/who-we-are', component: WhoWeAre },
  { path: '/history', name: 'History', component: History }

]

const router = createRouter({
  history: createWebHistory('/The-Jerusalem-Fund/'),
  routes
})

export default router
