import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'logIn',
      component: () => import('../views/logIn.vue')
    }
  ]
})

export default router
