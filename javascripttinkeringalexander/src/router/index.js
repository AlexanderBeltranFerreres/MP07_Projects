import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Calculadora from '../views/Calculadora.vue'
import FetchData from '../views/FetchData.vue'
import AxiosData from '../views/AxiosData.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calculadora',
    name: 'Calculadora',
    component: Calculadora
  },
  {
    path: '/fetch-data',
    name: 'FetchData',
    component: FetchData
  },
  {
    path: '/axios-data',
    name: 'AxiosData',
    component: AxiosData
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
