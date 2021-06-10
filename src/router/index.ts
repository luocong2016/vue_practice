import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/lazyload',
    name: 'Lazyload',
    component: () => import('@/views/Lazyload.vue')
  },
  {
    path: '/transitions',
    name: 'Transitions',
    component: () => import('@/views/Transitions.vue')
  },
  {
    path: '/positionAPI',
    name: 'PositionAPI',
    component: () => import('@/views/PositionAPI.vue')
  },
  {
    path: '/todoList',
    name: 'TodoList',
    component: () => import('@/views/provide/Demo.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
