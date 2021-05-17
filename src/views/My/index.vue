
<template>
  <div>
    <!-- 用户未登录时，显示登录组件 -->
    <!-- v-if="!token" -->
    <my-login v-if="!userInfo.token.token"></my-login>

    <!-- 用户登录后，显示用户信息组件 -->
    <!-- v-else -->
    <my-userinfo v-else></my-userinfo>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
  },
  created () {
    console.log(this.userInfo)
  },
  computed: {
    ...mapState('User', ['userInfo'])
  }

}
</script>

<style>

</style>
