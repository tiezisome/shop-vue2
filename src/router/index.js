import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: () => import("@/views/HomeView") },
  { path: "/hot", name: "hot", component: () => import("@/views/HotView") },
  {
    path: "/recommend",
    name: "recommend",
    component: () => import("@/views/RecommendView"),
  },
  { path: "/mine", name: "mine", component: () => import("@/views/MineView") },
];

const router = new VueRouter({
  routes,
});

export default router;
