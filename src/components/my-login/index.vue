<template>
  <div class="login-container">
    <!-- 提示登录的图标 -->
<div class="login-pic">
  <img src="@/assets/login.jpg">
</div>
    <!-- 登录按钮 -->
    <van-button type="primary" class="btn-login" @click="gotoRegister(1)">一键登录</van-button>
    <!-- 登录提示 -->
    <div class="tips-text" @click="gotoRegister(2)">点击注册</div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { Toast } from 'vant'
export default {
  computed: {
    ...mapState('User', ['userInfo'])
  },
  created () {
    console.log(this.userInfo)
  },
  methods: {
    ...mapMutations('User', ['Login']),
    gotoRegister (num) {
      if (num === 1) {
        if (this.userInfo.data.username) {
          const res = {
            token: 'token'
          }
          this.Login({ token: res })
          Toast.success('登陆成功！')
          this.$router.push({
            path: '/my'
          })
        } else {
          const toast = Toast.loading({
            duration: 0, // 持续展示 toast
            forbidClick: true,
            message: '您还未注册哦 3秒后去注册页',
            loadingType: 'spinner'
          })
          let second = 3
          const timer = setInterval(() => {
            second--
            if (second) {
              toast.message = `您还未注册哦 ${second}秒后去注册页`
            } else {
              clearInterval(timer)
              // 手动清除 Toast
              Toast.clear()
              this.$router.push({
                path: '/register'
              })
            }
          }, 1000)
        }
      } else {
        this.$router.push({
          path: '/register'
        })
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.login-container {
  // 登录盒子的样式
  height: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  position: relative;
  overflow: hidden;
  padding-top: 48px;
  // 绘制登录盒子底部的半椭圆造型
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    background-color: white;
    border-radius: 100%;
    transform: translateY(50%);
  }
.login-pic{
  width: 200px;
  height: 200px;
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
  // 登录按钮的样式
  .btn-login {
    width: 90%;
    border-radius: 100px;
    margin: 15px 0;
    background-color: #c00000;
  }

  // 按钮下方提示消息的样式
  .tips-text {
    font-size: 12px;
    color: gray;
    text-align: center;
    line-height: 36px;
    height: 36px;
    width: 100%;
  }
}
</style>
