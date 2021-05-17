/**
 * list_id--导航栏商品序列
 * list_icon--小图标
 */

const List = {
  data: [
    {
      list_id: 1,
      list_name: '大家电',
      list_icon: '',
      children: [
        {
          list_id: 3,
          list_name: '电视',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '曲面电视',
              list_icon: 'https://emm.erm.icu/myvant/666.jpg'
            }
          ]
        }
      ]
    }
  ],
  meta: {
    msg: '获取成功',
    status: 200
  }
}

module.exports = { List }
