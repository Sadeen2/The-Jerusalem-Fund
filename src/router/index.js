import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import WhoWeAre from '../pages/WhoWeAre.vue'
import History from '../pages/History.vue'
import BoardOfDirectors from '../pages/BoardOfDirectors.vue'
import ContactUs from '../pages/ContactUs.vue'
import Employment from '../pages/EmploymentOpportunities.vue'
import CommunityDevelopment from '../pages/CommunityDevelopment.vue'
import WhatWeDo from '../pages/WhatWeDo.vue'
import Culture from '../pages/Culture.vue'
import Grants from '../pages/Grants.vue'
import GrantApplication from '../pages/GrantApplication.vue'
import Blog from '../pages/Blog.vue'
import BlogDetails from '../pages/BlogDetails.vue'
import PalestineCenter from '../pages/PalestineCenter.vue'
import PastEvents from '../pages/PastEvents.vue'
import Events from '../pages/Events.vue'
import EventDetails from '../pages/EventDetails.vue'
import MediaLibrary from '../pages/MediaLibrary.vue'





const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/who-we-are', name: 'WhoWeAre', component: WhoWeAre },
  { path: '/history', name: 'History', component: History },
  { path: '/board-of-directors', name: 'BoardOfDirectors', component: BoardOfDirectors },
  { path: '/contact-us', name: 'ContactUs', component: ContactUs },
  { path: '/employment', name: 'Employment', component: Employment },
  { path: '/community-development', name: 'CommunityDevelopment', component: CommunityDevelopment },
  { path: '/what-we-do', name: 'WhatWeDo', component: WhatWeDo },
  { path: '/culture', name: 'Culture', component: Culture },
  { path: '/grants', name: 'Grants', component: Grants },
  { path: '/palestine-center', name: 'PalestineCenter', component: PalestineCenter },
  { path: '/grant-application', name: 'GrantApplication', component: GrantApplication },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blog-details', name: 'BlogDetails', component: BlogDetails },
  { path: '/past-events', name: 'PastEvents', component: PastEvents },
  { path: '/events', name: 'Events', component: Events },
  { path: '/event-details', name: 'EventDetails', component: EventDetails },
  { path: '/media-library', name: 'MediaLibrary', component: MediaLibrary },
  


]

const router = createRouter({
  history: createWebHashHistory('/The-Jerusalem-Fund/'),
  routes,
})

export default router
