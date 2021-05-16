export default {
  // 为当前模块开启命名空间
  namespaced: true,
  // 模块的 state 数据
  state: () => ({
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  }),
  mutations: {
    // 封装一个加入购物车的功能
    addCart (state, data) {
      // 点击加入购物车会传入商品详情，根据商品id判断cart中有无此商品
      // 如果res为空则表示购物车中没有该商品
      const res = state.cart.find((x) => x.goods_id === data.goods_id)
      if (!res) {
        state.cart.push(data)
      } else {
        res.goods_count++
      }
      this.commit('Cart/saveCart')
    },
    // 将商品信息保存在本地
    saveCart (state) {
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    // 勾选状态
    updataSave (state, data) {
      // 根据 goods_id 查询购物车中对应商品的信息对象
      const res = state.cart.find(x => x.goods_id === data.goods_id)
      // 有对应的商品信息对象
      if (res) {
      // 更新对应商品的勾选状态
        res.goods_state = data.goods_state
        // 持久化存储到本地
        this.commit('Cart/saveCart')
      }
    },
    // 更新所有商品的勾选状态
    updateAllsave (state, data) {
      // 循环更新购物车中每件商品的勾选状态
      state.cart.forEach(x => { x.goods_state = data })
      // 持久化存储到本地
      this.commit('Cart/saveCart')
    },
    // 购物车商品数量
    updateCount (state, data) {
      // 根据 goods_id 查询购物车中对应商品的信息对象
      const res = state.cart.find(x => x.goods_id === data.goods_id)
      if (res) {
        // 更新对应商品的数量
        res.goods_count = data.goods_count
        // 持久化存储到本地
        this.commit('Cart/saveCart')
      }
    },
    // 删除商品
    removeCart (state, id) {
    // 调用filter方法过滤
      state.cart = state.cart.filter(x => x.goods_id !== id)
      // 持久化存储到本地
      this.commit('Cart/saveCart')
    }
  },
  getters: {
    // 更新商品的数量
    total (state) {
      let num = 0
      state.cart.forEach(item => { num += item.goods_count })
      return num
    },
    // 勾选商品的总数量
    checkedCount (state) {
      let total = 0
      state.cart.filter(item => {
        if (item.goods_state) {
          total += item.goods_count
        }
      })
      return total
    },
    // 已勾选的商品总价
    checkedTotal (state) {
      let total = 0
      state.cart.filter(item => {
        if (item.goods_state) {
          total += item.goods_count * item.goods_price
        }
      })
      return total.toFixed(2)
    }
  }
}
