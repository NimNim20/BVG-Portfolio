import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import getProjectItems from '@/modules/getProjects'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Home"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "About"
      }
    },
    {
      path: '/projects',
      name: 'My Projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: {
        title:"Projects"
      }
    },
    {
      path: '/projectdetails/:id',
      name: 'Project Details',
      component: () => import('../views/ProjectDetailsView.vue'),
      meta: {
        dynamicTitle: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.dynamicTitle){
    const projectItems = getProjectItems()
    .projectItems.value.find(item => item.id == to.params.id)
    if(projectItems){
      document.title = `BVG Portfolio | ${projectItems.title}`
    }
  }
  else{
    document.title = `BVG Portfolio | ${to.meta.title}`
  }
  next()
})

export default router
