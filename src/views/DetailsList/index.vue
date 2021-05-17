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
  },
  methods: {
    // 点击去商品详情
    gotoDetail (item) {
      this.$router.push({
        path: '/details',
        query: {
          details_id: item.details_id
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
