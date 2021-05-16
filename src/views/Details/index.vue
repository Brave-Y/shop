<template>
  <div v-if="details_info[0].goods_name">
          <nave-bar :showIcon="true" :title=title />
    <!-- 轮播图区域 -->
    <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="2400" loop touchable  indicator-color="white">
      <van-swipe-item v-for="(item, i) in details_info[0].pics" :key="i">
        <a>
          <!-- 超链接项目完成再添加 -->
           <!-- :href=item.navigator_url -->
          <img :src="item.pics_big">
        </a>
      </van-swipe-item>
    </van-swipe>
    </div>
    <!-- 商品信息区 -->
<div class="details-info-box">
  <!-- 商品价格 -->
  <div class="price">￥{{details_info[0].goods_price}}</div>
  <!-- 信息主体区域 -->
  <div class="details-info-body">
    <!-- 商品名称 -->
    <div class="details-name">{{details_info[0].goods_name}}</div>
    <!-- 收藏 -->
    <div class="shou">
      <van-icon name="star-o" />
      <span>收藏</span>
    </div>
  </div>
  <!-- 运费 -->
  <div class="yun">快递：免运费</div>
</div>

<!-- 商品介绍 -->
<!-- 商品功能 -->
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" dot />
  <van-goods-action-icon @click="gotoCart" :badge=badge icon="cart-o" text="购物车" />
  <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
  <van-goods-action-button @click="add_Cart" type="warning" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>

    </div>
</template>

<script>
import { Details } from '../../utils/Sql/details'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      // 商品详情对象
      details_info: {},
      badge: this.total,
      title: '商品详情'
    }
  },
  computed: {
    ...mapState('Cart', ['cart']),
    ...mapGetters('Cart', ['total'])
  },
  watch: {
    total: {
      handler (newVal) {
        this.badge = newVal
      },
      immediate: true
    }
  },
  created () {
    this.getDetails(this.$route.query.goods_id)
    console.log(this.details_info[0])
  },
  methods: {
    ...mapMutations('Cart', ['addCart']),
    // 获取商品详情
    getDetails (id) {
      const res = Details.data
      const data = res.filter((item) => {
        if (parseInt(id) === parseInt(item.goods_id)) return item
      })
      this.details_info = data
    },
    // 跳转购物车
    gotoCart () {
      this.$router.push({
        path: '/cart'
      })
    },
    // 加如购物车
    add_Cart () {
      // 2. 组织一个商品的信息对象
      const data = {
        goods_id: this.details_info[0].goods_id, // 商品的Id
        goods_name: this.details_info[0].goods_name, // 商品的名称
        goods_price: this.details_info[0].goods_price, // 商品的价格
        goods_count: 1, // 商品的数量
        goods_small_logo: this.details_info[0].goods_small_logo, // 商品的图片
        goods_state: true // 商品的勾选状态
      }
      this.addCart(data)
    }
  }
}
</script>

<style lang="scss" scoped>
/* 轮播图区域 */
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 16px;
    text-align: center;
    background-color: #39a9ed;
  }
  .swipe img{
    display: inline-block;
    width: 100%;
    height: 350px;
}
// 商品信息区域的样式
.details-info-box {
  padding: 10px;
  padding-right: 0;
  .price {
    color: #c00000;
    font-size: 18px;
    margin: 10px 0;
  }
  .details-info-body {
    display: flex;
    justify-content: space-between;
    .details-name {
      font-size: 13px;
      padding-right: 10px;
    }
    // 收藏区域
    .shou {
      width: 120px;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #efefef;
      color: gray;
      span{
        font-size: 14px;
      }
    }
  }
  // 运费
  .yun {
    margin: 10px 0;
    font-size: 12px;
    color: gray;
  }
}
</style>
