import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { Button, Tabbar, TabbarItem } from 'vant'

Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
