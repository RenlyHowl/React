// 引入我们的redux包
import {createStore} from 'redux'


// 向外暴露我们创建的store


// 导入我们的reducer 方法 方法有很多个
// 我们导入cart
// import {cart} from './Reducers'
// export default createStore(cart) // 必须要传入一个参数reducer为function

// 导入reducers
import rootReducer from './Reducers'
export default createStore(rootReducer)




