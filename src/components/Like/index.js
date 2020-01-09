import React, { Component } from 'react'

export default class Like extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
      msg: "我是like中的input"
    }
  }
  handlerLike = () => {
    // this.state.isLiked = !this.state.isLiked
    /*
    使用这种方法在react中是不允许的
    ,可以更改state的状态,但是不能够在页面上渲染
    */
    

    // 不能直接更改state的状态,而是要使用this.state()的方法
    // this.setState({
    //   isLiked: !this.state.isLiked
    // })

    this.setState((prestate, preprops) => {
      return {
        isLiked: !prestate.isLiked
      }
    }
    ,() => {
      console.log(this.state)
    })
  }
  render() {
    return (
      <p>
        {/* 注意不要加括号 方法的调用 */}
        <input type="text" onChange={this.txtchange} value={this.state.msg}/>>
        <button onClick={this.handlerLike}>点击切换显示</button>
        {this.state.isLiked ? '😀':'😞'}
      </p>
    )
  }
  txtchange = (e) =>{
    console.log(e.target.value)
  }
}
