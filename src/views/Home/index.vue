<template>
  <div>
    <router-view />
    <van-tabbar class="footer" v-model="active" fixed z-index=3 route @change="onChange" placeholder>
      <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" dot to="/list">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" :badge=badge to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" badge="20" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
      // 当前选中项
      active: 0,
      // 购物车数量
      badge: this.total
    }
  },
  computed: {
    ...mapGetters('Cart', ['total'])
  },
  watch: {
    total: {
      handler (newVal) {
        this.badge = newVal
      },
      immediate: true
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

<style lang="scss" scoped>
.footer{
  position: fixed;
  bottom: 0;
}
</style>
