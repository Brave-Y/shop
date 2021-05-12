<template>
  <div>

    <!-- 轮播图区域 -->
    <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="2400" loop touchable  indicator-color="white">
      <van-swipe-item v-for="(item, index) in swipers" :key="index">
        <a>
          <!-- 超链接项目完成再添加 -->
           <!-- :href=item.navigator_url -->
          <img :src=item.image_src>
        </a>
      </van-swipe-item>
    </van-swipe>
    </div>

    <!-- 导航栏区域 -->
    <div class="navigator">
      <div class="navigator-flex" v-for="(item, index) in navigator" :key="index">
        <a :href=item.navigator_url>
          <!-- 超链接项目完成再添加 -->
           <!-- :href=item.navigator_url -->
          <img :src=item.image_src>
        </a>
      </div>
    </div>

    <!-- 楼层列表 -->
    <div>
      <!-- 楼层item -->
      <div v-for="(item, index) in floors" :key="index">
        <!-- 楼层标题 -->
        <img :src=item.floor_title.image_src class="floor-title">
        <!-- 楼层图片区域 -->
        <div class="floor-img">
          <!-- 楼层左侧大盒子 -->
          <div class="floor-left">
            <img :src=item.product_list[0].image_src :style="{width: item.product_list[0].image_width/2 + 'px'}">
          </div>
          <!-- 楼层右侧小盒子 -->
          <div class="floor-img-right">
            <!-- 遍历 -->
            <div v-for="(item2, index2) in item.product_list" :key="index2">
              <img :src=item2.image_src :style="{width: item2.image_width/2 + 'px'}">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// 轮播图数据
import { Swipers, Navigator, Floors } from '@/utils/Sql/index.js'
export default {
  data () {
    return {
      // 轮播图数据
      swipers: [],
      // 导航区数据
      navigator: [],
      // 楼层数据
      floors: []
    }
  },
  created () {
    this.swipers = Swipers.data
    this.navigator = Navigator.data
    // 获取楼层数据
    this.getFloors()
    console.log(this.floors)
  },
  methods: {
    getFloors () {
      const { data: res } = Floors
      this.floors = res
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
    height: 120px;
}
.navigator{
  display: flex;
  justify-content: space-around;
  margin-top: 12px;
  img {
    width: 93.75px;
    height: 140px;
  }
}
// 楼层区域
.floor-title {
  height: 60px;
  width: 100%;
  display: flex;
  margin: 8px 0;
}
.floor-img{
  display: flex;
  padding-left: 10px;
  .floor-left {
    img{
      height: 100%;
    }
  }
}
.floor-img-right{
display: flex;
flex-wrap: wrap;
justify-content: space-around;

}
</style>
