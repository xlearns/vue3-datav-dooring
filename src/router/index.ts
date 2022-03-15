import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/editor/EditorView.vue')
    },
    {
      path: '/border',
      name: 'border',
      component: () => import('../views/test/test.vue')
    }
  ]
})

export default router
