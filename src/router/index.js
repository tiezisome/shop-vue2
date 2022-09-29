import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import HotView from '@/views/HotView'
import RecommendView from '@/views/RecommendView'
import MineView from '@/views/MineView'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/hot', name: 'home', component: HotView },
  { path: '/recommend', name: 'home', component: RecommendView },
  { path: '/mine', name: 'mine', component: MineView },
]

const router = new VueRouter({
  routes,
})

export default router
