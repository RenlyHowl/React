// 导入react和react-dom包
import React from 'react'
import {render} from 'react-dom' // 按需导入react-dom中的render函数
import './index.css' //导入类样式
import classNames from 'classnames' //导入classnames第三方包
import styled from 'styled-components'//导入styled-components第三方包
// 定义组件的第二种方式
/*单单仅使用class不能创建react组件  要去继承react下的component最基本的组件 */

// 创建一个用模板字符串定义样式的组件
const Title = styled.h1`
  color: green;
`

class App extends React.Component {
  render() {
    return (
      <div id="childroot" className="div">
        <ol>
        <Title>我是Title组件其实是h1标签
          <h3>我是h3</h3>
        </Title>
        <li style={{fontSize: '25px', color: 'red'}}>{this.props.title} </li>
        <li className="has-txt-red">{this.props.content} </li>
        <li className={classNames('a', {'b': true}, {'c': false})}>使用第三方包动态的使用不同的类样式</li>
        </ol>
        
      </div>
    )
  }
}

// const app = React.createElement(
//   'div',
//   {
//     id: "childroot",
//     className: "div"
//   },
//   React.createElement(
//     'h1',
//     null,
//     "我是h1标签"
//   ),
//   React.createElement(
//     'p',
//     null,
//     "我是p标签"
//   )
// )

render(
  <App title={"我是h1标签"} content={"我是p标签"} />,
  document.querySelector("#root")
)