export default {
  // 开启命名空间
  namespaced: true,

  // state 数据
  state: () => ({
    // 收货地址
    address: {},
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : { data: {}, token: {} },
    name: 1
  }),

  // 方法
  mutations: {
    // 注册功能
    Register (state, data) {
      state.userInfo = data
      this.commit('User/saveUserinfo')
    },
    // 登录
    Login (state, data) {
      state.userInfo.token = data
      this.commit('User/saveUserinfo')
    },
    // 退出
    logout (state) {
      state.userInfo.token = {}
      this.commit('User/saveUserinfo')
    },
    // 注销
    out (state) {
      state.userInfo = { data: {}, token: {} }
      this.commit('User/saveUserinfo')
    },
    saveUserinfo (state) {
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
    },
    // 更新收货地址
    updateAddress (state, address) {
      state.address = address
    }
  },
  // 数据包装器
  getters: {}
}
