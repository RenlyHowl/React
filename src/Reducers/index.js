
// 集中管理所有的reducer



// export default {
//   cart
// }



/*redux为我们提供了进行集中管理的API */
import {combineReducers} from 'redux'



/* 在实际的项目中 由于我们只有单一的store,但是状态会有很多分类,所以我们需要划分
reducer;但是createStore只接收一个reducer,所以redux提供了一个合并reducer的方法,
不要我们手动的合并
*/

// 导入cartReducer 如果有多个 引入多个reducer
import cart from './cart'
import BlogList from './blogList'

// 导出合并后的reducer
export default combineReducers({
  // 把我们引入的reducer作为参数传入到combineReducer合并
  cart, // 相当于cart: cart
  /*
  在外部我们就可以通过store.getState().cart访问我们的cartReducer里的state;
  这里的store是我们导出后的store
  */
 BlogList
})


