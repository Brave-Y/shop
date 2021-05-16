<template>
  <div>
    <!-- 商品列表 -->
    <div class="details-list">
      <nave-bar :showIcon="false" :title=title />
      <!-- item遍历数据-- -->
      <div v-for="(item, index) in detailslist" :key="index" @click="gotoDetail(item)">
        <my-list :detailslist="item" :showRadio="false" />
      </div>
    </div>
  </div>
</template>

<script>
// 商品列表的数据
import { DetailsList } from '../../utils/Sql/detailslist'
export default {
  data () {
    return {
      detailslist: [],
      title: '商品列表'
    }
  },
  created () {
    this.detailslist = DetailsList.data.details
    console.log(this.detailslist)
  },
  methods: {
    gotoDetail (item) {
      console.log(item)
      this.$router.push({
        path: '/details',
        query: {
          goods_id: item.goods_id
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
