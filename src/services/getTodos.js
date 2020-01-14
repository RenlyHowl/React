// 1.导入axios包
import axios from 'axios'

import apis from './apis'
// 2.创建axios实例
const ajax = axios.create({
  // baseURL使用我们apis里统一管理的这些接口的api
  baseURL: apis.baseUrl
})



// 这里还会去做一些全局的拦截器处理

// 最后将获取数据的方法暴露出去
export const getTodos = () => {
  return ajax.get(apis.getTodos)
}



