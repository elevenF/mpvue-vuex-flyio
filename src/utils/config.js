/*
 * @Author: eleven
 * @Date: 2019-03-14 16:25:13
 * @Title: 2019-03-14 16:25:13
 */

// 调用flyio组件
var Fly = require('flyio/dist/npm/wx')

const fly = new Fly()

// 基础配置
fly.config.timeout = 10000
fly.config.baseURL = 'https://www.lsqhy.com/' // 请求基地址

// 添加请求拦截器
// fly.interceptors.request.use((request) => {
//   // request.headers['X-Tag'] = 'flyio'
//   console.log(request.body)
//   return request
// })

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
// fly.interceptors.response.use(
//   (response) => {
//     return response.data
//   },
//   (err) => {
//     return Promise.resolve(err)
//   }
// )
export default fly
