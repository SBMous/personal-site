import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/welcome',
      redirect: '/',
    },
    {
      path: '/whoiam',
      redirect: '/',
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('@/views/HistoryView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogHomeView.vue'),
    },
    {
      path: '/blog/:slug',
      name: 'blogslug',
      component: () => import('@/views/BlogPostView.vue'),
    },
    {
      path: '/oops',
      name: 'notfound',
      component: NotFoundView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/oops',
    },
  ],
})

export default router
