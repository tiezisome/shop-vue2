import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import {
  Button,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Icon,
  PullRefresh,
  Toast,
  List,
} from 'vant'
Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Icon)
Vue.use(PullRefresh)
Vue.use(Toast)
Vue.use(List)
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
