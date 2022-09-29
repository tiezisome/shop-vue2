<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/hot" icon="search">热门</van-tabbar-item>
      <van-tabbar-item replace to="/recommend" icon="friends-o" badge="5"
        >推荐</van-tabbar-item
      >
      <van-tabbar-item replace to="/mine" icon="setting-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: 0,
    }
  },
  components: {},
}
</script>

<style></style>
