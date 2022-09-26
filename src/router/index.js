import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeCom from '@/components/HomeCom'
import MineCom from '@/components/MineCom'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomeCom },
  { path: '/mine', name: 'mine', component: MineCom },
]

const router = new VueRouter({
  routes,
})

export default router
