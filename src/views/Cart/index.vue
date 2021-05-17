<template>
  <div>

<div v-if="detailslist.length !== 0">
      <!-- 购物车商品列表的标题区域 -->
<div class="cart-title">
  <!-- 左侧的图标 -->
  <van-icon name="shopping-cart-o" />
  <!-- 描述文本 -->
  <span class="cart-title-text">购物车</span>
</div>

<!-- 商品列表 -->
    <div class="details-list">
      <!-- item遍历数据-- -->
      <div v-for="(item, index) in detailslist" :key="index">
        <my-list :detailslist="item" :showRadio="true" @chan="change" @chan2="change2" @chan3="change3" />
      </div>
    </div>

<!-- <my-settle /> -->
<div class="footer">
  <van-checkbox  checked-color="#C00000" v-model="isFullCheck" @click="allchecked">全选</van-checkbox>
  <span>合计: <span>￥{{checkedTotal}}</span></span>
  <van-button class="button" type="danger">结算({{checkedCount}})</van-button>
</div>
</div>

    <!-- 空白购物车区域 -->
    <div class="empty-cart" v-else>
      <img src="@/assets/cart.png" class="empty-img" />
      <span class="tip-text">空空如也~</span>
    </div>

  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import { Toast } from 'vant'
export default {
  data () {
    return {
      detailslist: this.cart,
      c: false
    }
  },
  computed: {
    ...mapState('Cart', ['cart']),
    ...mapGetters('Cart', ['total', 'checkedCount', 'checkedTotal']),
    // 是否全选
    isFullCheck: {
      get () {
        return this.total === this.checkedCount
      },
      set (e) {
        return this.total === this.checkedCount
      }
    }
  },
  created () {
    this.getCart()
  },
  methods: {
    ...mapMutations('Cart', ['updataSave', 'updateAllsave', 'updateCount', 'removeCart']),
    // 获取商品信息
    getCart () {
      this.detailslist = this.cart
    },
    // 购物车勾选状态
    change (e) {
      this.updataSave(e)
    },
    // 全选功能
    allchecked () {
      this.updateAllsave(!this.isFullCheck)
    },
    // 购物车商品数量
    change2 (e) {
      this.updateCount(e)
    },
    // 删除商品
    change3 (id) {
      this.removeCart(id)
      this.getCart()
      Toast('删除成功  !')
    },
    // 地址
    onClickEditAddress () {
      console.log('地址')
    },
    // 提交订单
    onSubmit (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-title {
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 5px;
  border-bottom: 1px solid #efefef;

  .cart-title-text {
    margin-left: 10px;
  }
}
.van-submit-bar__bar{
  height: 70px;
}
.footer {
  /* 底部固定定位 */
  position: fixed;
  bottom: 70px;
  /* 设置宽高和背景色 */
  width: 100%;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-content: center;
  span{
    width: 140px;
    line-height: 50px;
    span{
        color: #c00000;
    }
  }
  .button{
    width: 120px;
    background-color: rgb(192,0,0);
  }
}
  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;

    .empty-img {
      width: 90px;
      height: 90px;
    }

    .tip-text {
      font-size: 12px;
      color: gray;
      margin-top: 15px;
    }
  }
</style>
