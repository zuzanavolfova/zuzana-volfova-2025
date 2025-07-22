import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./../views/HomeView.vue'),
    },
    {
      path: '/coding',
      name: 'coding',
      component: () => import('./../views/CodingView.vue'),
    },
    {
      path: '/graphic',
      name: 'graphic',
      component: () => import('./../views/GraphicView.vue'),
    },
    {
      path: '/UX',
      name: 'UX design',
      component: () => import('./../views/UXDesignView.vue'),
    },
    {
      path: '/curriculum',
      name: 'curriculum',
      component: () => import('./../views/CurriculumView.vue'),
    },
  ],
})

export default router
