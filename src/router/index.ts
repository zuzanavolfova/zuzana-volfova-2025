import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/coding',
      name: 'coding',
      component: () => import('./../views/codingView.vue'),
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
