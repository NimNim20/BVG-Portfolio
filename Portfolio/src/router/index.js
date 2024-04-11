import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import getProjectItems from '@/modules/getProjects'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'My Projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: {
        title:"Projects"
      }
    },
  ]
})

export default router
