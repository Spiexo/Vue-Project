import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/FinalExercise.vue'
import TestExercices from '../views/TestExercices.vue'
import UserView from '@/views/UserView.vue'
import ContactView from '@/views/ContactView.vue'
import TodoList from '@/components/TodoList.vue'
import CallApi from '@/components/CallApi.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TestExercices,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/todo-list',
      name: 'todo-list',
      component: TodoList,
    },
    {
      path: '/call-api',
      name: 'call-api',
      component: CallApi,
    },
  ],
})

export default router
