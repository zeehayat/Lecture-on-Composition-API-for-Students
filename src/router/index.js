import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Computed from '../views/Computed.vue'
import Props from '../views/Props.vue'
const routes=[
  {
    path:'/',
    name: 'Home',
    component: Home
  },
  {
    path:'/computed',
    name:'computed',
    component: Computed
  },
  {
    path: '/props',
    name: 'props',
    component: Props
  }
]


const router=createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes
})

export default router 