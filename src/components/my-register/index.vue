<template>
<div>
    <div class="head">我是注册</div>
<van-form @submit="onSubmit" submit-on-enter class="form">
  <van-field
   class="buton"
    v-model="register.username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
  class="buton"
    v-model="register.password"
    type="password"
    name="密码"
    label="密    码"
    placeholder="请输入六位数密码"
    :rules="[{ required: true, message: '请输入密码' }]"
  />
  <van-field
  class="buton"
    v-model="register.passwordagin"
    type="password"
    name="密码"
    label="确认密码"
    placeholder="再次输入密码"
    :rules="[{ required: true, message: '请再次输入密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">注册{{name}}</van-button>
  </div>
</van-form>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      register: {
        username: '',
        password: '',
        passwordagin: ''
      }
    }
  },
  computed: {
    ...mapState('User', ['name'])
  },
  methods: {
    ...mapMutations('User', ['Register']),
    onSubmit (data) {
      console.log('submit', data)
      const res = JSON.parse(localStorage.getItem('userinfo'))
      console.log(res)
      Object.keys(res).forEach(function (key) {
        console.log(key, res[key])
      })
      Object.keys(data).forEach(function (key) {
        console.log(key, data[key])
      })
      this.Register(data)
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

</style>
