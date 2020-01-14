import axios from "axios"

import apis from "./apis"

const ajax = axios.create({
  baseURL: apis.baseUrl
})

// 请求/posts的ajax请求
export const getPosts = () => {
  return ajax.get(apis.getPosts)
}