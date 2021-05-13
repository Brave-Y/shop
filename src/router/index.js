import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入home页面
import Home from '../views/Home'
// 引入主页
import Index from '../views/Index'
// 引入列表页
import List from '../views/List'
// 引入购物车
import Cart from '../views/Cart'
// 引入我的
import My from '../views/My'
// 引入注册页面
import Login from '../views/Login'
// 引入404页面
import Error from '../views/Error'
// 商品详情页面
import Details from '../views/Details'

// 注册路由
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'index',
        name: 'Index',
        component: Index
      },
      {
        path: 'list',
        name: 'Name',
        component: List
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: 'my',
        name: 'My',
        component: My
      }
    ]
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  routes
})

export default router
