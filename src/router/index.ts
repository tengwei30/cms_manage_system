import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
// import NotFound from '../views/no_found';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/home/index.vue')
  }
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: { requiresAuth: false } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
