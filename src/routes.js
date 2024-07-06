import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@page/home.vue') },
  { path: '/gen', component: () => import('@page/gen.vue') },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router