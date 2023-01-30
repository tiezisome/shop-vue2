import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import api from "./api";
import { store } from "@/store/index.js";
import "./assets/global.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$api = api;
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
