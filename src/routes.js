import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@page/home.vue'
import Gen from '@page/home.vue'
import Chat from '@page/home.vue'
import Jour from '@page/home.vue'
import Search from '@page/home.vue'
import Tour from '@page/home.vue'

const routes = [
  // { path: '/', component: () => import('@page/home.vue') },
  // { path: '/gen', component: () => import('@page/gen.vue') },
  // { path: '/chat', component: () => import('@page/chat.vue') },
  // { path: '/jour', component: () => import('@page/journal.vue') },
  // { path: '/search', component: () => import('@page/search.vue') },
  // { path: '/tour', component: () => import('@page/tour.vue') },
  { path: '/', component: Home },
  { path: '/gen', component: Gen },
  { path: '/chat', component: Chat },
  { path: '/jour', component: Jour },
  { path: '/search', Search },
  { path: '/tour', Tour },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router