// 引入我们的redux包
import {createStore, applyMiddleware} from 'redux'


// 向外暴露我们创建的store


// 导入我们的reducer 方法 方法有很多个
// 我们导入cart
// import {cart} from './Reducers'
// export default createStore(cart) // 必须要传入一个参数reducer为function

// 导入reducers
import rootReducer from './Reducers'

// 传入我们的中间件
import thunk from "redux-thunk"

// 在异步action的时候 需要给创建store传入第二个参数就是我们的中间件(是个方法再里面传入你的中间件)
export default createStore(rootReducer, applyMiddleware(thunk))
// 如果有多个中间件 就在applyMiddleware里面添加




