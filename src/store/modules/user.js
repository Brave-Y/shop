export default {
  // 开启命名空间
  namespaced: true,

  // state 数据
  state: () => ({
    // 收货地址
    address: {},
    userInfo: {}
  }),

  // 方法
  mutations: {
    // 注册功能
    register (state, data) {
      state.userInfo = data
    },
    // 更新收货地址
    updateAddress (state, address) {
      state.address = address
    }
  },
  // 数据包装器
  getters: {}
}
