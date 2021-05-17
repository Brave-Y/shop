<template>
  <van-nav-bar
    :title=title
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  >
    <template #right>
<van-icon v-if="showIcon" class="icon" name="bars" />
<div class="right" v-if="showright" @click="login">登录</div>
  </template>
  </van-nav-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      defaul: ''
    },
    showIcon: {
      type: Boolean,
      defaul: false
    },
    showright: {
      type: Boolean,
      defaul: false
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    login () {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.icon{
    font-size: 20px;
}
.right{
  color: rgb(25,137,251);
  width: 100%;
}
</style>
