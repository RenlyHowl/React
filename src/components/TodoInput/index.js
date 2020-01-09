// 使用ref来获取标签元素或者组件,在使用ref之前必须先调用createRef来创建一个ref
import React, { Component, createRef } from 'react'


export default class TodoInput extends Component {
  constructor() {
    super();
    this.state = {
      msg: "消息"
    }
    this.txtchange = this.txtchange.bind(this)
    // 在构造函数里面进行调用
    // 创建一个ref
    this.inputDOM = createRef()
  }
  render() {
    // console.log(this.inputDOM);
    return (
      <div>
        {/* <input onChange={this.txtchange} value={this.state.msg} type="text"/>  */}
        <input onChange={this.txtchange} value={this.state.msg} type="text" ref={this.inputDOM}/>
        <button onClick={this.addtodo}>添加</button>
      </div>
    )
  }
  // txtchange = (e) => {
  //   this.setState({
  //     msg: 
  //   })
  // }
  txtchange(e){
    console.log(e);
    this.setState({
      msg: e.target.value
    })
  }
  addtodo = () => {
    this.props.addtodo(this.state.msg);
    this.setState({
      msg: ""
    },() => {
      this.inputDOM.current.focus();// 使用this.inputDOM.current就能获取input输入框 
    })
  }

}
