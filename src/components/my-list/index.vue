<template>
  <!-- 商品列表 -->
  <div class="details-list">
    <!-- item遍历数据-- -->
      <!-- 列表大盒子 -->
      <div class="details-item">
        <!-- 商品左侧图片区域 -->
        <div class="details-item-left">
          <!-- :src="goods.goods_small_logo || defaultPic" -->
          <img :src="detailslist.goods_small_logo || defaultPic" class="details-pic" />
        </div>
        <!-- 商品右侧信息区域 -->
        <div class="details-item-right">
          <!-- 商品标题 -->
          <span class="details-name">{{ detailslist.goods_name }}</span>
          <div class="details-info-box">
            <!-- 商品价格 -->
            <span class="details-price">￥{{ detailslist.goods_price | tofixed }}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    detailslist: {
      type: Object,
      defaul: {}
    }
  },
  filters: {
  // 把数字处理为带两位小数点的数字
    tofixed (num) {
      return Number(num).toFixed(2)
    }
  },
  created () {
    console.log(this.detailslist)
  },
  data () {
    return {
      // 默认图片
      defaultPic: 'https://emm.erm.icu/myvant/666.jpg'
    }
  },
  methods: {
    chahge (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.details-item {
  display: flex;
  padding: 10px 5px;
  border-bottom: 1px solid #f0f0f0;
  .details-item-left {
    margin-right: 5px;
    .details-pic {
      width: 100px;
      height: 100px;
      display: block;
    }
  }
  .details-item-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .details-name {
      font-size: 13px;
    }
    .details-price {
      font-size: 16px;
      color: #c00000;
    }
  }
}
</style>
