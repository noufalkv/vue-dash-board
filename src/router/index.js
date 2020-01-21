import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/dashboard.vue'
import Customer from '../views/customer.vue'
import Settings from '../views/settings.vue'
import Chart from '../views/chart.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios),
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/customer',
    name: 'customer',
    component: Customer
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/chart',
    name: 'chart',
    component: Chart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
