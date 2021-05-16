
<template>
  <div>
    <!-- 用户未登录时，显示登录组件 -->
    <!-- v-if="!token" -->
    <my-login ></my-login>

    <!-- 用户登录后，显示用户信息组件 -->
    <!-- v-else -->
    <!-- <my-userinfo ></my-userinfo> -->
  </div>
</template>

<script>
export default {
  components: {
  }

}
</script>

<style>

</style>
