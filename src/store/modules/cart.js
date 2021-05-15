export default {
  // 为当前模块开启命名空间
  namespaced: true,
  // 模块的 state 数据
  state: () => ({
    // 购物车的数组，用来存储购物车中每个商品的信息对象
    // 每个商品的信息对象，都包含如下 6 个属性：
    // { goods_id, goods_name, goods_price, goods_count, goods_small_logo, goods_state }
    cart: JSON.parse(localStorage.getItem('cart') || []),
    name: 6
  }),
  mutations: {
    // 封装一个加入购物车的功能
    addCart (state, data) {
      // 点击加入购物车会传入商品详情，根据商品id判断cart中有无此商品
      // 如果res为空则表示购物车中没有该商品
      const res = state.cart.find((x) => x.goods_id === data.goods_id)
      if (!res) {
        state.cart.push(data)
        console.log(state.cart)
      } else {
        res.goods_count++
      }
      this.commit('Cart/saveCart')
    },
    // 将商品信息保存在本地
    saveCart (state) {
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  getters: {
    // 更新商品的数量
    total (state) {
      let num = 0
      state.cart.forEach(item => { num += item.goods_count })
      return num
    }
  }
}
