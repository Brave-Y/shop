<template>
  <div>
    <router-view />
    <van-tabbar v-model="active" fixed z-index route @change="onChange">
      <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" dot to="/list">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" :badge=badge to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" badge="20" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      // 当前选中项
      active: 0,
      // 购物车数量
      badge: 6
    }
  },
  methods: {
    onChange (item) {
      console.log(item)
      this.active = item
    }
  }
}
</script>

<style>
</style>
