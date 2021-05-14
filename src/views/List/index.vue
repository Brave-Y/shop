<template>
 <div>
   <!-- 分类列表 -->
    <div class="side">
    <!-- 左边的选项栏 -->
    <van-sidebar class="side-left" v-model="activeKey" @change="onChange">
      <van-sidebar-item  v-for="(item, index) in list" :key="index" :class="['side-left-item', index === activeKey ? 'active' : '']" :title=item.cat_name />
    </van-sidebar>
    <!-- 右边的内容栏 -->
    <div class="side-right" :model="activeKey" :style="{height: height + 'px'}">
      <div class="side-right-item" v-for="(item2, index2) in list2" :key="index2">
        <div class="side-right-title">/{{item2.cat_name}}/</div>
        <!-- 三级 -->
        <div class="side-right-item3">
          <!-- 三级item -->
          <div class="side-right-item3-item" v-for="(item3, index3) in item2.children" :key="index3" @click="gotoGoodsList(item3)">
            <img :src=item3.cat_icon>
            <span>{{item3.cat_name}}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
 </div>
</template>

<script>
import { List } from '../../utils/Sql/List'
export default {
  data () {
    return {
      // 默认选中第一项
      activeKey: 0,
      // 窗口可用高度
      height: 0,
      // 分类数据列表
      List: [],
      // 二级分类列表
      list2: []
    }
  },
  created () {
    this.height = document.documentElement.clientHeight
    this.list = List.data
    this.list2 = List.data[0].children
  },
  methods: {
    onChange (index) {
      this.activeKey = index
      // 为二级分类列表重新赋值
      this.list2 = this.list[index].children
    },
    gotoGoodsList (item3) {
      console.log(item3)
      this.$router.push({
        path: '/detailslist',
        query: {
          cid: item3.cat_id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.side {
  display: flex;
  // 左侧样式
  .side-left {
    width: 120px;
    .side-left-item {
      line-height: 30px;
      background-color: #f7f7f7;
      text-align: center;
      font-size: 13px;
      // 激活项的样式
      &.active {
        background-color: #ffffff;
        position: relative;
        // 渲染激活项左侧的红色指示边线
        &::before {
          content: " ";
          display: block;
          width: 3px;
          height: 36px;
          background-color: #c00000;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  // 右侧样式
  .side-right{
    width: 100%;
    .side-right-title {
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding: 15px 0;
}
.side-right-item3 {
  display: flex;
  flex-wrap: wrap;
  .side-right-item3-item {
    width: 33.33%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
    }
    span {
      font-size: 12px;
    }
  }
}
  }
}
</style>
