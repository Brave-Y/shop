// 商品列表组件
import MyList from './my-list'
export default {
  install (Vue) {
    // 插槽工具栏
    Vue.component('MyList', MyList)
  }
}
