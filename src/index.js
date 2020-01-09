import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import store from './store'
// 导入App.js文件 App组件
import App from './App.js'

// 导入react-redux的Provider将根组件包裹起来
import {Provider} from 'react-redux'




// 如果想要全局的扩展React中的protoType就可以使用下面的这种方法;比如将ajax的方法挂载到组件的this上就可以使用下面的方法
/*在实际的开发中,别人用的是其他的都方法*/
// 在React.Component上挂载创建的发送请求的方法

// 1.引入所有的ajax请求
// import * as service from './services'
// 2.在protoType上加载一个叫http的对象;然后就可以在组件内部通过this.http.方法名 的方式来执行一些操作
// React.Component.prototype.http = service
// 函数式组件使用react-hooks
function Count() {
  // console.log(useState(10))
  let [count, setCount] = useState(10);// 默认state的值为0

  useEffect(() => {
    document.title = `当前的数量为${count}`
  })
  return (
    <div>
      <h1>我是计数器</h1>
      {/* 不能用count--或者count++ */}
      <button onClick={() => {setCount(count - 1)}}>-</button>
      <span>{count}</span>
      <button onClick={() => {setCount(count + 1)}}>+</button>
    </div>
  )
}


// ------------------
// 打印导入创建的store
// 将store挂载到window上,以便调试
window.store = store


// 将store传给我们的App组件

ReactDom.render(
  // 必须要有一个store属性,这个store就是我们创建的store
  /*
  所有被包裹的组件(根组件的后代组件)都可以
  使用react-redux里的connect方法进行导入使用
  */
  <Provider store={store}>
    <Count></Count>
    <App store={store}></App>
  </Provider>,
  document.querySelector("#root")
)




