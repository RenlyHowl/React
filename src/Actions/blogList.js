import actionType from './actionType'
// 导入发起ajax请求数据的方法
import {
  getPosts
} from "../services/getPosts"

// 前面我们定义了3个actionType,那么我们这里也要定义三个方法

// 开始请求
const startFetchBlogLists = () => {
  return {
    type: actionType.START_FETCH_BLOG_LISTS
  }
}

// 请求成功  接收参数
const fetchBlogListsSuccess = (payLoad) => {
  return {
    type: actionType.FETCH_BLOG_LISTS_SUCCESS,
    payLoad
  }
}

// 请求失败
const fetchBlogListsFail = () => {
  return {
    type: actionType.FETCH_BLOG_LISTS_FAIL,

  }
}

// action没有第二个参数 也就是我们之前的id
export const fetchBlogList = () => dispatch => {
  dispatch(
    // 将我们开始请求的actionTypedispatch出去
    startFetchBlogLists()
  )

  // 发起异步请求
  getPosts()
    .then((res) => {
      console.log(res)
      if (res.status === 200) {
        // 请求成功 dispatch请求成功的actionType
        // 同时将数据作为参数传过去 最好传一个对象
        dispatch(fetchBlogListsSuccess({
          lists: res.data
        }))
      } else {
        // 请求失败 dispatch请求失败的actionType
        dispatch(fetchBlogListsFail())
      }
    })
    .catch((err) => {
      console.log(err)
      // 请求失败 dispatch请求失败的actionType
      dispatch(fetchBlogListsFail())
    })
}