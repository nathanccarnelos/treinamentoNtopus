import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dynamic',
    name: 'Dynamic',
    component: () => import('../views/Dynamic.vue'),
  },
  {
    path: '/functional',
    name: 'Functional',
    component: () => import('../views/Functional.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
