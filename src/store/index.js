import Vue from 'vue'
import Vuex from 'vuex'
// 引入购物车模块
import Cart from './modules/cart'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 挂载 store 模块
  modules: {
    Cart
  }
})
export default store
