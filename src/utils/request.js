import axios from 'axios'
// 这里通过axios.create来创建多个不同的axios的实例，以备不时之需
const instance = axios.create({
  baseURL: 'http://www,baidu.com'
})
export default instance
