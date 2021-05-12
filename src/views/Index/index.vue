<template>
  <div>

    <!-- 轮播图区域 -->
    <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="2400" loop touchable  indicator-color="white">
      <van-swipe-item v-for="(item, index) in swipers" :key="index">
        <a >
          <!-- 超链接项目完成再添加 -->
           <!-- :href=item.navigator_url -->
          <img :src=item.image_src>
        </a>
      </van-swipe-item>
    </van-swipe>
    </div>

    <!-- 导航栏区域 -->
6
  </div>
</template>

<script>
// 轮播图数据
import { Swipers } from '@/utils/Sql/index.js'
export default {
  data () {
    return {
      // 轮播图数据
      swipers: []
    }
  },
  created () {
    this.swipers = Swipers.data
  }
}
</script>

<style scoped>
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
    height: 120px;
}
</style>
