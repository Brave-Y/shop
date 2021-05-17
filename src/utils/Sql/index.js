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
      image_src: 'https://emm.erm.icu/myvant/666.jpg',
      navigator_url: 'https://www.baidu.com/'
    },
    {
      image_src: 'https://emm.erm.icu/myvant/666.jpg',
      navigator_url: 'https://www.baidu.com/'
    },
    {
      image_src: 'https://emm.erm.icu/myvant/666.jpg',
      navigator_url: 'https://www.baidu.com/'
    },
    {
      image_src: 'https://emm.erm.icu/myvant/666.jpg',
      navigator_url: 'https://www.baidu.com/'
    }
  ],
  meta: { msg: '获取成功', status: 200 }
}
// 导航栏数据
const Navigator = {
  data: [
    {
      name: '分类',
      image_src: 'https://emm.erm.icu/myvant/666.jpg',
      navigator_url: '/#/list'
    },
    {
      name: '秒杀',
      image_src: 'https://emm.erm.icu/myvant/666.jpg',
      navigator_url: 'https://www.baidu.com/'
    },
    {
      name: '超市',
      image_src: 'https://emm.erm.icu/myvant/666.jpg',
      navigator_url: 'https://www.baidu.com/'
    },
    {
      name: '当季热',
      image_src: 'https://emm.erm.icu/myvant/666.jpg',
      navigator_url: 'https://www.baidu.com/'
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
        image_src: 'https://emm.erm.icu/myvant/666.jpg'
      },
      // 内容区域
      product_list: [
        {
          name: '优质服饰',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '232',
          navigator_url: 'https://www.baidu.com/?query=服饰'
        },
        {
          name: '春季热门',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '233',
          navigator_url: 'https://www.baidu.com/?query=热'
        },
        {
          name: '优质服饰',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '232',
          navigator_url: 'https://www.baidu.com/?query=服饰'
        },
        {
          name: '春季热门',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '233',
          navigator_url: 'https://www.baidu.com/?query=热'
        }
      ]
    },
    {
      floor_title: {
        name: '时尚女装',
        image_src: 'https://emm.erm.icu/myvant/666.jpg'
      },
      // 内容区域
      product_list: [
        {
          name: '优质服饰',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '232',
          navigator_url: 'https://www.baidu.com/?query=服饰'
        },
        {
          name: '春季热门',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '233',
          navigator_url: 'https://www.baidu.com/?query=热'
        },
        {
          name: '优质服饰',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '232',
          navigator_url: 'https://www.baidu.com/?query=服饰'
        },
        {
          name: '春季热门',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '233',
          navigator_url: 'https://www.baidu.com/?query=热'
        }
      ]
    },
    {
      floor_title: {
        name: '时尚女装',
        image_src: 'https://emm.erm.icu/myvant/666.jpg'
      },
      // 内容区域
      product_list: [
        {
          name: '优质服饰',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '232',
          navigator_url: 'https://www.baidu.com/?query=服饰'
        },
        {
          name: '春季热门',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '233',
          navigator_url: 'https://www.baidu.com/?query=热'
        },
        {
          name: '优质服饰',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '232',
          navigator_url: 'https://www.baidu.com/?query=服饰'
        },
        {
          name: '春季热门',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '233',
          navigator_url: 'https://www.baidu.com/?query=热'
        }
      ]
    },
    {
      floor_title: {
        name: '时尚女装',
        image_src: 'https://emm.erm.icu/myvant/666.jpg'
      },
      // 内容区域
      product_list: [
        {
          name: '优质服饰',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '232',
          open_type: 'navigate',
          navigator_url: 'https://www.baidu.com/?query=服饰'
        },
        {
          name: '春季热门',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '233',
          open_type: 'navigate',
          navigator_url: 'https://www.baidu.com/?query=热'
        },
        {
          name: '优质服饰',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '232',
          open_type: 'navigate',
          navigator_url: 'https://www.baidu.com/?query=服饰'
        },
        {
          name: '春季热门',
          image_src: 'https://emm.erm.icu/myvant/666.jpg',
          image_width: '233',
          open_type: 'navigate',
          navigator_url: 'https://www.baidu.com/?query=热'
        }
      ]
    }
  ],
  meta: { msg: '获取成功', status: 200 }
}

module.exports = { Swipers, Navigator, Floors }
