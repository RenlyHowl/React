import React, { Component } from 'react'

// 既然是一个方法 那么就可以传参数;参数传一个组件过去
const withCopyright = (UrComponent) => {
  return (
    class index extends Component {
      render() {
        return (
          <div>
            <h1>我是高阶组件</h1>
            {/* 这里的this.props指的是外层的index的组件,也就是我们最外面暴露出去的 */}
            <UrComponent {...this.props}></UrComponent>
          </div>
        )
      }
    }
  )
}

// 将方法暴露出去
export default withCopyright