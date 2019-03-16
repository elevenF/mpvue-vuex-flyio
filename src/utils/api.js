/*
 * @Title: 接口文件配置
 * @Date: 2019-03-14 15:36:05
 * @Author: eleven
 */

import fly from './config'
import qs from 'qs'

// 通用的get请求
export const get = (params) => {
  return fly.get(`${params.url}`, qs.stringify(params.data))
}

// 通用的post请求
export const post = (params) => {
  return fly.post(`${params.url}`, qs.stringify(params.data))
}

// 封装的登录请求，根据后台接收方式选择是否加qs.stringify
export const login = params => {
  return fly.post('/login', params)
}
