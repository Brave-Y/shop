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
    :type=type
    name="password"
    label="密    码"
    placeholder="请输入六位数密码"
    :rules="[{ pattern, required: true, message: '请输入六位数字' }]"
  />
  <van-field
  class="buton"
    v-model="register.passwordagin"
    :type=type
    name="password"
    label="确认密码"
    placeholder="再次输入密码"
    :rules="[{ validator, required: true, message: '两次输入密码不同' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">注册</van-button>
  </div>
</van-form>
<van-divider content-position="left">提示<van-icon @click="change(1)" name="eye-o" /></van-divider>
<div class="tishi">
  <h5>注意：</h5>
  <p>账号格式为6位数任意字符</p>
  <p>密码格式为6位数字</p>
  <p>本平台提供一键登录，因此只需注册完账号返回登录页登录即可</p>
  <p>本平台一切数据均是储存在本地，如果反复注册则会覆盖当前账号密码，如忘记账号密码，重新注册新账号登录即可</p>
  <p>~~~</p>
</div>
</div>
</template>

<script>
import { Toast } from 'vant'
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      title: '注册页',
      pattern: /^\d{6}$/,
      type: 'password',
      istype: true,
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
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator (val) {
      return this.register.password === this.register.passwordagin
    },
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
    change () {
      if (this.istype) {
        this.type = 'text'
        this.istype = false
      } else {
        this.type = 'password'
        this.istype = true
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
  .tishi{
    padding: 0 24px;
    p{
      font-size: 16px;
      color: gray;
    }
  }
</style>
