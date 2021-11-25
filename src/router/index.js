import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sales',
    name: 'Sales',
    component: () => import('../views/Sales.vue')
  },
  {
    path: '/',
    name: 'Sign_in',
    component: () => import('../views/Sign_in.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
