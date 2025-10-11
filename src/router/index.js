import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import WhoWeAre from '../pages/WhoWeAre.vue'
import History from '../pages/History.vue'
import BoardOfDirectors from '../pages/BoardOfDirectors.vue'
import ContactUs from '../pages/ContactUs.vue'


const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/who-we-are', name: 'WhoWeAre', component: WhoWeAre },
  { path: '/history', name: 'History', component: History },
  { path: '/board-of-directors', name: 'BoardOfDirectors', component: BoardOfDirectors },
  { path: '/contact-us', name: 'ContactUs', component: ContactUs }
]

const router = createRouter({
  history: createWebHashHistory('/The-Jerusalem-Fund/'),
  routes,
})

export default router
