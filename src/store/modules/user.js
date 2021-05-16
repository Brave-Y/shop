export default {
  // 开启命名空间
  namespaced: true,

  // state 数据
  state: () => ({
    // 收货地址
    address: {},
    userInfo: {},
    name: 1
  }),

  // 方法
  mutations: {
    // 注册功能
    Register (state, data) {
      state.userInfo = data
      this.commit('User/saveUserinfo')
    },
    saveUserinfo (state) {
      localStorage.setItem('userinfo', JSON.stringify(state.userInfo))
    },
    // 更新收货地址
    updateAddress (state, address) {
      state.address = address
    }
  },
  // 数据包装器
  getters: {}
}
