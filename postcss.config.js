module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 标准UI2倍图下,1rem = 37.5px
      propList: ['*'] // 一个存储哪些将被转换的属性列表 '*'代表全部
    }
  }
}
