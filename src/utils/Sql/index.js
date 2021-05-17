/**
 * image_src--商品图
 * navigator_url--路由
 * floor_title--楼层标题图
 * product_list--楼层标题数据
 * image_width--图片宽度
 */

// 轮播图数据
const Swipers = {
  data: [
    {
      image_src: 'https://emm.erm.icu/8/1.jpg'
    },
    {
      image_src: 'https://emm.erm.icu/8/2.jpg'
    },
    {
      image_src: 'https://emm.erm.icu/8/3.jpg'
    },
    {
      image_src: 'https://emm.erm.icu/8/4.jpg'
    }
  ],
  meta: { msg: '获取成功', status: 200 }
}
// 导航栏数据
const Navigator = {
  data: [
    {
      name: '分类',
      image_src: 'https://emm.erm.icu/8/31.png',
      navigator_url: '/#/list'
    },
    {
      name: '秒杀',
      image_src: 'https://emm.erm.icu/8/32.png',
      navigator_url: '/#/index'
    },
    {
      name: '超市',
      image_src: 'https://emm.erm.icu/8/33.png',
      navigator_url: '/#/index'
    },
    {
      name: '当季热',
      image_src: 'https://emm.erm.icu/8/34.png',
      navigator_url: '/#/index'
    }
  ],
  meta: { msg: '获取成功', status: 200 }
}

// 楼层
const Floors = {
  data: [
  // 标题
    {
      floor_title: {
        name: '时尚女装',
        image_src: 'https://emm.erm.icu/8/21.png'
      },
      floor_left: {
        name: '时尚女装',
        image_src: 'https://emm.erm.icu/8/51.png'
      },
      // 内容区域
      product_list: [
        {
          name: '优质服饰',
          image_src: 'https://emm.erm.icu/8/52.png',
          image_width: '232',
          navigator_url: 'https://www.baidu.com/?query=服饰'
        },
        {
          name: '春季热门',
          image_src: 'https://emm.erm.icu/8/53.png',
          image_width: '233',
          navigator_url: 'https://www.baidu.com/?query=热'
        },
        {
          name: '优质服饰',
          image_src: 'https://emm.erm.icu/8/54.png',
          image_width: '232',
          navigator_url: 'https://www.baidu.com/?query=服饰'
        },
        {
          name: '春季热门',
          image_src: 'https://emm.erm.icu/8/55.png',
          image_width: '233',
          navigator_url: 'https://www.baidu.com/?query=热'
        }
      ]
    },
    {
      floor_title: {
        name: '时尚女装',
        image_src: 'https://emm.erm.icu/8/22.png'
      },
      floor_left: {
        name: '时尚女装',
        image_src: 'https://emm.erm.icu/8/61.png'
      },
      // 内容区域
      product_list: [
        {
          name: '优质服饰',
          image_src: 'https://emm.erm.icu/8/62.png',
          image_width: '232',
          navigator_url: 'https://www.baidu.com/?query=服饰'
        },
        {
          name: '春季热门',
          image_src: 'https://emm.erm.icu/8/63.png',
          image_width: '233',
          navigator_url: 'https://www.baidu.com/?query=热'
        },
        {
          name: '优质服饰',
          image_src: 'https://emm.erm.icu/8/64.png',
          image_width: '232',
          navigator_url: 'https://www.baidu.com/?query=服饰'
        },
        {
          name: '春季热门',
          image_src: 'https://emm.erm.icu/8/65.png',
          image_width: '233',
          navigator_url: 'https://www.baidu.com/?query=热'
        }
      ]
    }

  ],
  meta: { msg: '获取成功', status: 200 }
}

module.exports = { Swipers, Navigator, Floors }
