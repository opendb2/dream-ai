import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@page/home.vue') },
  { path: '/gen', component: () => import('@page/gen.vue') },
  { path: '/chat', component: () => import('@page/chat.vue') },
  { path: '/jour', component: () => import('@page/journal.vue') },
  { path: '/search', component: () => import('@page/search.vue') },
  { path: '/tour', component: () => import('@page/tour.vue') },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router