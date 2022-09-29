<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-grid :gutter="10">
      <van-grid-item icon="gem-o" text="Hot" to="/hot" />
      <van-grid-item icon="comment-o" text="Hot" to="/hot" />
      <van-grid-item icon="gift-o" text="Hot" to="/hot" />
      <van-grid-item icon="balance-list-o" text="Hot" to="/hot" />
    </van-grid>
    <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in 10" :key="item" :title="item" />
    </van-list>
    <!-- </van-pull-refresh> -->
  </div>
</template>

<script>
// import { Toast } from 'vant'
export default {
  name: 'HomeCom',
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 200px;
  text-align: center;
  background-color: #39a9ed;
  margin-bottom: 10px;
}
</style>
