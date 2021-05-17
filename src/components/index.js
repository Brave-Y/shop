// 商品列表组件
import MyList from './my-list'
// 用户信息
import MyUserinfo from './my-userinfo'
// 登录页面
import MyLogin from './my-login'
// 注册页面
import MyRegister from './my-register'
// naveBar
import NaveBar from './nave-bar'
export default {
  install (Vue) {
    // 插槽工具栏
    Vue.component('MyList', MyList)
    Vue.component('MyUserinfo', MyUserinfo)
    Vue.component('MyLogin', MyLogin)
    Vue.component('MyRegister', MyRegister)
    Vue.component('NaveBar', NaveBar)
  }
}
