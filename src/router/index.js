import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Главная',
    component: () => import('../views/main.vue')
  },
  {
    path: '/',
    name: 'Вход',
    component: () => import('../views/Sign_in.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
