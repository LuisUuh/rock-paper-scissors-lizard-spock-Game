import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Game from '@/components/game/index.vue'
import Result from '@/components/game/result.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/Game',
    name: 'Game',
    component: Home
  },
  {
    path: '**',
    redirect: '/Game',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
