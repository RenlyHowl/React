// 导入react和react-dom包
import React from 'react'
import ReactDom from 'react-dom'

// const createApp = (props) => {
// return (
//   <div>
//     {/* 只要在jsx的代码中加入js的代码只需要加一次{}即可 */}
//   <h1>hello world!!!{props.title}</h1>
//   <p>{props.title}</p>
//   </div>
// )
// }

// const app = createApp({
//   title: "react"
// });

const App = (props) => {
  return (
    <div>
      {/* 只要在jsx的代码中加入js的代码只需要加一次{}即可 */}
    <h1 title={props.title}>hello world!!!{props.title}</h1>
    <p>{props.title}</p>
    </div>
  )
  }



ReactDom.render(
  <App title="mylove"></App>,
  document.querySelector("#root")
)