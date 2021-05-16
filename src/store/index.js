import Vue from 'vue'
import Vuex from 'vuex'
// 引入购物车模块
import Cart from './modules/cart'
// 引入个人模块
import User from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 挂载 store 模块
  modules: {
    Cart,
    User
  }
})
export default store
