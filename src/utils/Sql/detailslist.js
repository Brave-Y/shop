/**
 * details_id--商品唯一id
 * details_name--标题
 * details_price--价格
 * details_small_logo--商品左侧小图
 */

const DetailsList = {
  data: {
    details: [
      {
        details_id: 57332,
        details_name: '666400毫升 海鲜食品冷藏冰包 注水冰袋医用冰袋户外冷藏保鲜熟食冷藏反复使用（10个装）',
        details_price: 14,
        details_small_logo: 'https://emm.erm.icu/myvant/666.jpg'
      },
      {
        details_id: 57194,
        details_name: '777洗车工具汽车美容用品海绵刷不伤车漆擦车海棉清洁海绵',
        details_price: 29,
        details_small_logo: 'https://emm.erm.icu/myvant/666.jpg'
      }
    ]
  },
  meta: { msg: '获取成功', status: 200 }
}

module.exports = { DetailsList }
