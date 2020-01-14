import actionType from "../Actions/actionType"



  /*
  数据的接口:
  https://jsonplaceholder.typicode.com/posts
  */
const initState = {
  lists: [
    // 假数据
    // {
    //   "userId": 1,
    //   "id": 1,
    //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    // },
    // {
    //   "userId": 1,
    //   "id": 2,
    //   "title": "qui est esse",
    //   "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    // }
  ],
  isLoading: false
}

const blogReducer = (state = initState, action) => {
  switch(action.type) {
    case actionType.START_FETCH_BLOG_LISTS: 
    // 发起ajax请求数据
    return {
      ...state, // 空数组 其实会渲染两次; 第一次的isLoading的值为false
      isLoading: true // isLoading 为true
    };
    case actionType.FETCH_BLOG_LISTS_SUCCESS:
    // 数据请求成功
    return {
      ...state,
      isLoading: false, // 成功改为false 
      /*
      同时我们发送ajax接收到的数据 在action里面要通过参数传过来
      */
     lists: action.payLoad.lists
    }
    case actionType.FETCH_BLOG_LISTS_SUCCESS:
    // 数据请求失败
    return {
      ...state,
      isLoading: true
      /*其实我们的err也可以传过来 或者在我们的initState里定义;
      然后根据不同的actionType来看是不是要渲染 */
    }
    default:
      return state;
  }
}




export default blogReducer