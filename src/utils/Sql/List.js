/**
 * list_id--导航栏商品序列
 * list_icon--小图标
 */

const List = {
  data: [
    {
      list_id: 1,
      list_name: '家电',
      list_icon: '',
      children: [
        {
          list_id: 11,
          list_name: '格力',
          list_icon: '',
          children: [
            {
              list_id: 111,
              list_name: '空调',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 112,
              list_name: '挂机',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 113,
              list_name: '艺术定制',
              list_icon: require('@/assets/1/3.webp')
            },
            {
              list_id: 114,
              list_name: '遥控器',
              list_icon: require('@/assets/1/4.webp')
            },
            {
              list_id: 115,
              list_name: '空调过滤网',
              list_icon: require('@/assets/1/5.webp')
            },
            {
              list_id: 116,
              list_name: '压力锅',
              list_icon: require('@/assets/1/6.webp')
            },
            {
              list_id: 117,
              list_name: '三门冰箱',
              list_icon: require('@/assets/1/7.webp')
            },
            {
              list_id: 118,
              list_name: '热水器',
              list_icon: require('@/assets/1/8.webp')
            },
            {
              list_id: 119,
              list_name: '格力手机',
              list_icon: require('@/assets/1/9.webp')
            }
          ]
        },
        {
          list_id: 12,
          list_name: '海尔',
          list_icon: '',
          children: [
            {
              list_id: 121,
              list_name: 'DVD',
              list_icon: require('@/assets/2/1.jpg')
            },
            {
              list_id: 123,
              list_name: 'MP3',
              list_icon: require('@/assets/2/2.webp')
            },
            {
              list_id: 123,
              list_name: '彩电',
              list_icon: require('@/assets/2/3.webp')
            },
            {
              list_id: 124,
              list_name: '燃气灶',
              list_icon: require('@/assets/2/4.webp')
            },
            {
              list_id: 125,
              list_name: '手机',
              list_icon: require('@/assets/2/5.webp')
            },
            {
              list_id: 126,
              list_name: '热水器',
              list_icon: require('@/assets/2/6.webp')
            },
            {
              list_id: 127,
              list_name: '空调',
              list_icon: require('@/assets/2/7.webp')
            },
            {
              list_id: 128,
              list_name: '计算机',
              list_icon: require('@/assets/2/8.webp')
            },
            {
              list_id: 129,
              list_name: '冰箱',
              list_icon: require('@/assets/2/9.webp')
            }
          ]
        },
        {
          list_id: 13,
          list_name: '海信',
          list_icon: '',
          children: [
            {
              list_id: 131,
              list_name: '手机壳',
              list_icon: require('@/assets/3/1.webp')
            },
            {
              list_id: 132,
              list_name: '遥控器',
              list_icon: require('@/assets/3/2.webp')
            },
            {
              list_id: 133,
              list_name: '烹锅',
              list_icon: require('@/assets/5/3.webp')
            },
            {
              list_id: 134,
              list_name: '电缆',
              list_icon: require('@/assets/7/4.webp')
            },
            {
              list_id: 135,
              list_name: '智能遥控器',
              list_icon: require('@/assets/6/5.webp')
            },
            {
              list_id: 136,
              list_name: '燃气灶',
              list_icon: require('@/assets/5/6.webp')
            },
            {
              list_id: 137,
              list_name: '益智玩具',
              list_icon: require('@/assets/4/7.webp')
            },
            {
              list_id: 138,
              list_name: '电子书',
              list_icon: require('@/assets/2/8.webp')
            }
          ]
        }
      ]
    },
    {
      list_id: 2,
      list_name: '进口',
      list_icon: '',
      children: [
        {
          list_id: 21,
          list_name: '美国',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '阿拉巴马州',
              list_icon: require('@/assets/2/6.webp')
            },
            {
              list_id: 5,
              list_name: '阿拉斯加州',
              list_icon: require('@/assets/3/2.webp')
            },
            {
              list_id: 5,
              list_name: '亚利桑那州',
              list_icon: require('@/assets/4/3.webp')
            },
            {
              list_id: 5,
              list_name: '阿肯色州',
              list_icon: require('@/assets/5/4.webp')
            },
            {
              list_id: 5,
              list_name: '加利福尼亚州',
              list_icon: require('@/assets/6/5.webp')
            },
            {
              list_id: 5,
              list_name: '科罗拉多州',
              list_icon: require('@/assets/4/6.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '德国',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '斯图加特',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '慕尼黑',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '柏林',
              list_icon: require('@/assets/2/3.webp')
            },
            {
              list_id: 5,
              list_name: '波茨坦',
              list_icon: require('@/assets/6/4.webp')
            },
            {
              list_id: 5,
              list_name: '不来梅',
              list_icon: require('@/assets/4/5.webp')
            },
            {
              list_id: 5,
              list_name: '威斯巴',
              list_icon: require('@/assets/3/6.webp')
            },
            {
              list_id: 5,
              list_name: '什未林',
              list_icon: require('@/assets/1/7.webp')
            },
            {
              list_id: 5,
              list_name: '汉诺威',
              list_icon: require('@/assets/1/8.webp')
            },
            {
              list_id: 5,
              list_name: '杜塞尔多夫',
              list_icon: require('@/assets/1/2.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '小日本',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '湖北',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '北京',
              list_icon: require('@/assets/3/2.webp')
            },
            {
              list_id: 5,
              list_name: '上海',
              list_icon: require('@/assets/4/3.webp')
            },
            {
              list_id: 5,
              list_name: '广州',
              list_icon: require('@/assets/5/4.webp')
            },
            {
              list_id: 5,
              list_name: '深圳',
              list_icon: require('@/assets/1/5.webp')
            },
            {
              list_id: 5,
              list_name: '武汉',
              list_icon: require('@/assets/2/6.webp')
            },
            {
              list_id: 5,
              list_name: '河南',
              list_icon: require('@/assets/3/4.webp')
            },
            {
              list_id: 5,
              list_name: '黑龙江',
              list_icon: require('@/assets/1/8.webp')
            },
            {
              list_id: 5,
              list_name: '云南',
              list_icon: require('@/assets/1/9.webp')
            }
          ]
        }
      ]
    },
    {
      list_id: 3,
      list_name: '电器',
      list_icon: '',
      children: [
        {
          list_id: 3,
          list_name: '饮水机',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '冰箱',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 5,
              list_name: '冷饮机',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '热饮机',
              list_icon: require('@/assets/1/3.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '厨具',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '燃气灶',
              list_icon: require('@/assets/2/1.jpg')
            },
            {
              list_id: 5,
              list_name: '微波炉',
              list_icon: require('@/assets/2/2.webp')
            },
            {
              list_id: 5,
              list_name: '烤箱',
              list_icon: require('@/assets/2/3.webp')
            },
            {
              list_id: 5,
              list_name: '消毒柜',
              list_icon: require('@/assets/2/4.webp')
            }
          ]
        }
      ]
    },
    {
      list_id: 4,
      list_name: '鞋靴',
      list_icon: '',
      children: [
        {
          list_id: 3,
          list_name: '布鞋',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '布鞋1',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 5,
              list_name: '布鞋2',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '布鞋3',
              list_icon: require('@/assets/1/3.webp')
            },
            {
              list_id: 5,
              list_name: '布鞋4',
              list_icon: require('@/assets/1/4.webp')
            },
            {
              list_id: 5,
              list_name: '布鞋5',
              list_icon: require('@/assets/1/5.webp')
            },
            {
              list_id: 5,
              list_name: '布鞋6',
              list_icon: require('@/assets/1/6.webp')
            },
            {
              list_id: 5,
              list_name: '布鞋7',
              list_icon: require('@/assets/1/7.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '胶鞋',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '回力',
              list_icon: require('@/assets/2/1.jpg')
            },
            {
              list_id: 5,
              list_name: '耐克',
              list_icon: require('@/assets/2/2.webp')
            },
            {
              list_id: 5,
              list_name: '阿迪达斯',
              list_icon: require('@/assets/2/3.webp')
            },
            {
              list_id: 5,
              list_name: 'dk',
              list_icon: require('@/assets/2/4.webp')
            }
          ]
        }
      ]
    },
    {
      list_id: 2,
      list_name: '进口',
      list_icon: '',
      children: [
        {
          list_id: 21,
          list_name: '美国',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '阿拉巴马州',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 5,
              list_name: '阿拉斯加州',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '亚利桑那州',
              list_icon: require('@/assets/1/3.webp')
            },
            {
              list_id: 5,
              list_name: '阿肯色州',
              list_icon: require('@/assets/1/4.webp')
            },
            {
              list_id: 5,
              list_name: '加利福尼亚州',
              list_icon: require('@/assets/1/5.webp')
            },
            {
              list_id: 5,
              list_name: '科罗拉多州',
              list_icon: require('@/assets/1/6.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '德国',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '斯图加特',
              list_icon: require('@/assets/2/1.jpg')
            },
            {
              list_id: 5,
              list_name: '慕尼黑',
              list_icon: require('@/assets/2/2.webp')
            },
            {
              list_id: 5,
              list_name: '柏林',
              list_icon: require('@/assets/2/3.webp')
            },
            {
              list_id: 5,
              list_name: '波茨坦',
              list_icon: require('@/assets/2/4.webp')
            },
            {
              list_id: 5,
              list_name: '不来梅',
              list_icon: require('@/assets/2/5.webp')
            },
            {
              list_id: 5,
              list_name: '威斯巴',
              list_icon: require('@/assets/2/6.webp')
            },
            {
              list_id: 5,
              list_name: '什未林',
              list_icon: require('@/assets/2/7.webp')
            },
            {
              list_id: 5,
              list_name: '汉诺威',
              list_icon: require('@/assets/2/8.webp')
            },
            {
              list_id: 5,
              list_name: '杜塞尔多夫',
              list_icon: require('@/assets/2/9.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '小日本',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '湖北',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 5,
              list_name: '北京',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '上海',
              list_icon: require('@/assets/1/3.webp')
            },
            {
              list_id: 5,
              list_name: '广州',
              list_icon: require('@/assets/1/4.webp')
            },
            {
              list_id: 5,
              list_name: '深圳',
              list_icon: require('@/assets/1/5.webp')
            },
            {
              list_id: 5,
              list_name: '武汉',
              list_icon: require('@/assets/1/6.webp')
            },
            {
              list_id: 5,
              list_name: '河南',
              list_icon: require('@/assets/1/7.webp')
            },
            {
              list_id: 5,
              list_name: '黑龙江',
              list_icon: require('@/assets/1/8.webp')
            },
            {
              list_id: 5,
              list_name: '云南',
              list_icon: require('@/assets/1/9.webp')
            }
          ]
        }
      ]
    },
    {
      list_id: 3,
      list_name: '电器',
      list_icon: '',
      children: [
        {
          list_id: 3,
          list_name: '饮水机',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '冰箱',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 5,
              list_name: '冷饮机',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '热饮机',
              list_icon: require('@/assets/1/3.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '厨具',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '燃气灶',
              list_icon: require('@/assets/2/1.jpg')
            },
            {
              list_id: 5,
              list_name: '微波炉',
              list_icon: require('@/assets/2/2.webp')
            },
            {
              list_id: 5,
              list_name: '烤箱',
              list_icon: require('@/assets/2/3.webp')
            },
            {
              list_id: 5,
              list_name: '消毒柜',
              list_icon: require('@/assets/2/4.webp')
            }
          ]
        }
      ]
    },
    {
      list_id: 4,
      list_name: '鞋靴',
      list_icon: '',
      children: [
        {
          list_id: 3,
          list_name: '布鞋',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '布鞋1',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 5,
              list_name: '布鞋2',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '布鞋3',
              list_icon: require('@/assets/1/3.webp')
            },
            {
              list_id: 5,
              list_name: '布鞋4',
              list_icon: require('@/assets/1/4.webp')
            },
            {
              list_id: 5,
              list_name: '布鞋5',
              list_icon: require('@/assets/1/5.webp')
            },
            {
              list_id: 5,
              list_name: '布鞋6',
              list_icon: require('@/assets/1/6.webp')
            },
            {
              list_id: 5,
              list_name: '布鞋7',
              list_icon: require('@/assets/1/7.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '胶鞋',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '回力',
              list_icon: require('@/assets/2/1.jpg')
            },
            {
              list_id: 5,
              list_name: '耐克',
              list_icon: require('@/assets/2/2.webp')
            },
            {
              list_id: 5,
              list_name: '阿迪达斯',
              list_icon: require('@/assets/2/3.webp')
            },
            {
              list_id: 5,
              list_name: 'dk',
              list_icon: require('@/assets/2/4.webp')
            }
          ]
        }
      ]
    },
    {
      list_id: 8,
      list_name: '数码',
      list_icon: '',
      children: [
        {
          list_id: 3,
          list_name: '手机',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '苹果',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 5,
              list_name: '三新',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: 'oppo',
              list_icon: require('@/assets/1/3.webp')
            },
            {
              list_id: 5,
              list_name: '华为',
              list_icon: require('@/assets/1/4.webp')
            },
            {
              list_id: 5,
              list_name: '小米',
              list_icon: require('@/assets/1/5.webp')
            },
            {
              list_id: 5,
              list_name: '魅族',
              list_icon: require('@/assets/1/6.webp')
            },
            {
              list_id: 5,
              list_name: '锤子',
              list_icon: require('@/assets/1/7.webp')
            },
            {
              list_id: 5,
              list_name: '一加',
              list_icon: require('@/assets/1/8.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '电脑',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '联想',
              list_icon: require('@/assets/2/1.jpg')
            },
            {
              list_id: 5,
              list_name: '戴尔',
              list_icon: require('@/assets/2/2.webp')
            },
            {
              list_id: 5,
              list_name: '华为',
              list_icon: require('@/assets/2/3.webp')
            },
            {
              list_id: 5,
              list_name: '小米',
              list_icon: require('@/assets/2/4.webp')
            },
            {
              list_id: 5,
              list_name: '苹果',
              list_icon: require('@/assets/2/5.webp')
            },
            {
              list_id: 5,
              list_name: '战神',
              list_icon: require('@/assets/2/6.webp')
            },
            {
              list_id: 5,
              list_name: '外星人',
              list_icon: require('@/assets/2/7.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '电视',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: 'TCL',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 5,
              list_name: '小米',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '华为',
              list_icon: require('@/assets/1/3.webp')
            },
            {
              list_id: 5,
              list_name: '三新',
              list_icon: require('@/assets/1/4.webp')
            }
          ]
        }
      ]
    },
    {
      list_id: 2,
      list_name: '进口',
      list_icon: '',
      children: [
        {
          list_id: 21,
          list_name: '美国',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '阿拉巴马州',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 5,
              list_name: '阿拉斯加州',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '亚利桑那州',
              list_icon: require('@/assets/1/3.webp')
            },
            {
              list_id: 5,
              list_name: '阿肯色州',
              list_icon: require('@/assets/1/4.webp')
            },
            {
              list_id: 5,
              list_name: '加利福尼亚州',
              list_icon: require('@/assets/1/5.webp')
            },
            {
              list_id: 5,
              list_name: '科罗拉多州',
              list_icon: require('@/assets/1/6.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '德国',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '斯图加特',
              list_icon: require('@/assets/2/1.jpg')
            },
            {
              list_id: 5,
              list_name: '慕尼黑',
              list_icon: require('@/assets/2/2.webp')
            },
            {
              list_id: 5,
              list_name: '柏林',
              list_icon: require('@/assets/2/3.webp')
            },
            {
              list_id: 5,
              list_name: '波茨坦',
              list_icon: require('@/assets/2/4.webp')
            },
            {
              list_id: 5,
              list_name: '不来梅',
              list_icon: require('@/assets/2/5.webp')
            },
            {
              list_id: 5,
              list_name: '威斯巴',
              list_icon: require('@/assets/2/6.webp')
            },
            {
              list_id: 5,
              list_name: '什未林',
              list_icon: require('@/assets/2/7.webp')
            },
            {
              list_id: 5,
              list_name: '汉诺威',
              list_icon: require('@/assets/2/8.webp')
            },
            {
              list_id: 5,
              list_name: '杜塞尔多夫',
              list_icon: require('@/assets/2/9.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '小日本',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '湖北',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 5,
              list_name: '北京',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '上海',
              list_icon: require('@/assets/1/3.webp')
            },
            {
              list_id: 5,
              list_name: '广州',
              list_icon: require('@/assets/1/4.webp')
            },
            {
              list_id: 5,
              list_name: '深圳',
              list_icon: require('@/assets/1/5.webp')
            },
            {
              list_id: 5,
              list_name: '武汉',
              list_icon: require('@/assets/1/6.webp')
            },
            {
              list_id: 5,
              list_name: '河南',
              list_icon: require('@/assets/1/7.webp')
            },
            {
              list_id: 5,
              list_name: '黑龙江',
              list_icon: require('@/assets/1/8.webp')
            },
            {
              list_id: 5,
              list_name: '云南',
              list_icon: require('@/assets/1/9.webp')
            }
          ]
        }
      ]
    },
    {
      list_id: 3,
      list_name: '电器',
      list_icon: '',
      children: [
        {
          list_id: 3,
          list_name: '饮水机',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '冰箱',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 5,
              list_name: '冷饮机',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '热饮机',
              list_icon: require('@/assets/1/3.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '厨具',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '燃气灶',
              list_icon: require('@/assets/2/1.jpg')
            },
            {
              list_id: 5,
              list_name: '微波炉',
              list_icon: require('@/assets/2/2.webp')
            },
            {
              list_id: 5,
              list_name: '烤箱',
              list_icon: require('@/assets/2/3.webp')
            },
            {
              list_id: 5,
              list_name: '消毒柜',
              list_icon: require('@/assets/2/4.webp')
            }
          ]
        }
      ]
    },
    {
      list_id: 2,
      list_name: '进口',
      list_icon: '',
      children: [
        {
          list_id: 21,
          list_name: '美国',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '阿拉巴马州',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 5,
              list_name: '阿拉斯加州',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '亚利桑那州',
              list_icon: require('@/assets/1/3.webp')
            },
            {
              list_id: 5,
              list_name: '阿肯色州',
              list_icon: require('@/assets/1/4.webp')
            },
            {
              list_id: 5,
              list_name: '加利福尼亚州',
              list_icon: require('@/assets/1/5.webp')
            },
            {
              list_id: 5,
              list_name: '科罗拉多州',
              list_icon: require('@/assets/1/6.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '德国',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '斯图加特',
              list_icon: require('@/assets/2/1.jpg')
            },
            {
              list_id: 5,
              list_name: '慕尼黑',
              list_icon: require('@/assets/2/2.webp')
            },
            {
              list_id: 5,
              list_name: '柏林',
              list_icon: require('@/assets/2/3.webp')
            },
            {
              list_id: 5,
              list_name: '波茨坦',
              list_icon: require('@/assets/2/4.webp')
            },
            {
              list_id: 5,
              list_name: '不来梅',
              list_icon: require('@/assets/2/5.webp')
            },
            {
              list_id: 5,
              list_name: '威斯巴',
              list_icon: require('@/assets/2/6.webp')
            },
            {
              list_id: 5,
              list_name: '什未林',
              list_icon: require('@/assets/2/7.webp')
            },
            {
              list_id: 5,
              list_name: '汉诺威',
              list_icon: require('@/assets/2/8.webp')
            },
            {
              list_id: 5,
              list_name: '杜塞尔多夫',
              list_icon: require('@/assets/2/9.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '小日本',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '湖北',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 5,
              list_name: '北京',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '上海',
              list_icon: require('@/assets/1/3.webp')
            },
            {
              list_id: 5,
              list_name: '广州',
              list_icon: require('@/assets/1/4.webp')
            },
            {
              list_id: 5,
              list_name: '深圳',
              list_icon: require('@/assets/1/5.webp')
            },
            {
              list_id: 5,
              list_name: '武汉',
              list_icon: require('@/assets/1/6.webp')
            },
            {
              list_id: 5,
              list_name: '河南',
              list_icon: require('@/assets/1/7.webp')
            },
            {
              list_id: 5,
              list_name: '黑龙江',
              list_icon: require('@/assets/1/8.webp')
            },
            {
              list_id: 5,
              list_name: '云南',
              list_icon: require('@/assets/1/9.webp')
            }
          ]
        }
      ]
    },
    {
      list_id: 3,
      list_name: '电器',
      list_icon: '',
      children: [
        {
          list_id: 3,
          list_name: '饮水机',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '冰箱',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 5,
              list_name: '冷饮机',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '热饮机',
              list_icon: require('@/assets/1/3.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '厨具',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '燃气灶',
              list_icon: require('@/assets/2/1.jpg')
            },
            {
              list_id: 5,
              list_name: '微波炉',
              list_icon: require('@/assets/2/2.webp')
            },
            {
              list_id: 5,
              list_name: '烤箱',
              list_icon: require('@/assets/2/3.webp')
            },
            {
              list_id: 5,
              list_name: '消毒柜',
              list_icon: require('@/assets/2/4.webp')
            }
          ]
        }
      ]
    },
    {
      list_id: 4,
      list_name: '鞋靴',
      list_icon: '',
      children: [
        {
          list_id: 3,
          list_name: '布鞋',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '布鞋1',
              list_icon: require('@/assets/1/1.png')
            },
            {
              list_id: 5,
              list_name: '布鞋2',
              list_icon: require('@/assets/1/2.webp')
            },
            {
              list_id: 5,
              list_name: '布鞋3',
              list_icon: require('@/assets/1/3.webp')
            },
            {
              list_id: 5,
              list_name: '布鞋4',
              list_icon: require('@/assets/1/4.webp')
            },
            {
              list_id: 5,
              list_name: '布鞋5',
              list_icon: require('@/assets/1/5.webp')
            },
            {
              list_id: 5,
              list_name: '布鞋6',
              list_icon: require('@/assets/1/6.webp')
            },
            {
              list_id: 5,
              list_name: '布鞋7',
              list_icon: require('@/assets/1/7.webp')
            }
          ]
        },
        {
          list_id: 3,
          list_name: '胶鞋',
          list_icon: '',
          children: [
            {
              list_id: 5,
              list_name: '回力',
              list_icon: require('@/assets/2/1.jpg')
            },
            {
              list_id: 5,
              list_name: '耐克',
              list_icon: require('@/assets/2/2.webp')
            },
            {
              list_id: 5,
              list_name: '阿迪达斯',
              list_icon: require('@/assets/2/3.webp')
            },
            {
              list_id: 5,
              list_name: 'dk',
              list_icon: require('@/assets/2/4.webp')
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
