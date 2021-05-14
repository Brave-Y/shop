<template>
  <div>
    <!-- 轮播图区域 -->
    <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="2400" loop touchable  indicator-color="white">
      <van-swipe-item v-for="(item, i) in goods_info[0].pics" :key="i">
        <a>
          <!-- 超链接项目完成再添加 -->
           <!-- :href=item.navigator_url -->
          <img :src="item.pics_big">
        </a>
      </van-swipe-item>
    </van-swipe>
    </div>
    <!-- 商品信息区 -->

    </div>
</template>

<script>
import { Details } from '../../utils/Sql/details'
export default {
  data () {
    return {
      // 商品详情对象
      goods_info: {}
    }
  },
  created () {
    this.getDetails(this.$route.query.goods_id)
    console.log(this.goods_info[0])
  },
  methods: {
    // 获取商品详情
    getDetails (id) {
      const res = Details.data
      const data = res.filter((item) => {
        if (parseInt(id) === parseInt(item.goods_id)) return item
      })
      this.goods_info = data
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
</style>
