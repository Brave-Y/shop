const List = {
  data: [
    {
      cat_id: 1,
      cat_name: '大家电',
      cat_pid: 0,
      cat_level: 0,
      cat_deleted: false,
      cat_icon: '',
      children: [
        {
          cat_id: 3,
          cat_name: '电视',
          cat_pid: 1,
          cat_level: 1,
          cat_deleted: false,
          cat_icon: '',
          children: [
            {
              cat_id: 5,
              cat_name: '曲面电视',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://emm.erm.icu/myvant/666.jpg'
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
