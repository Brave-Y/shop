<template>
<div>
<van-nav-bar
  title="注册页"
  left-text="重置"
  right-text="去登陆"
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<van-form @submit="onSubmit" submit-on-enter class="form">
  <van-field
   class="buton"
    v-model="register.username"
    name="username"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
  class="buton"
    v-model="register.password"
    type="password"
    name="password"
    label="密    码"
    placeholder="请输入六位数密码"
    :rules="[{ required: true, message: '请输入密码' }]"
  />
  <van-field
  class="buton"
    v-model="register.passwordagin"
    type="password"
    name="password"
    label="确认密码"
    placeholder="再次输入密码"
    :rules="[{ required: true, message: '请再次输入密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">注册</van-button>
  </div>
</van-form>
<van-divider content-position="left">提示</van-divider>
</div>
</template>

<script>
import { Toast } from 'vant'
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      title: '注册页',
      register: {
        username: '',
        password: '',
        passwordagin: ''
      }
    }
  },
  created () {
  },
  computed: {
    ...mapState('User', ['userInfo'])
  },
  methods: {
    ...mapMutations('User', ['Register']),
    onSubmit (data) {
      if (this.userInfo.data.username) {
        this.Register({ data, token: {} })
        Toast.success('重新注册完成！')
      } else {
        this.Register({ data, token: {} })
        Toast.success('注册完成！')
      }
    },
    // 重置
    onClickLeft () {
      this.register = {
        username: '',
        password: '',
        passwordagin: ''
      }
    },
    onClickRight () {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.head{
    height: 100px;
    width: 100%;
    text-align: center;
    line-height: 100px;
}
.form {
    .button {
        height:36px ;
    }
}
  .tips-text {
    font-size: 12px;
    color: gray;
    text-align: center;
    line-height: 36px;
    height: 36px;
    width: 100%;
    margin-top: 36px;
  }
</style>
