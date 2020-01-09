import React, { Component, createRef } from 'react'

export default class TodoItem extends Component {
  constructor(props){
    super();
    this.state = {
      item: "我是TodoItem2",
      completed: props.completed
    }
    this.checkDOM = createRef()
  }
  render() {
    // console.log(this.props)
    // console.log(this)
    return (
      <li>
        {this.props.id} &nbsp; &nbsp; &nbsp; &nbsp;
        {this.props.title}
      <input type="checkbox" checked={this.state.completed} ref={this.checkDOM} onChange={this.checkhandler} />{this.state.completed?'已完成':"未完成"}
      </li>
    )
  }
  checkhandler = () => {
    this.setState({
      completed: this.checkDOM.current.checked
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextState); // 已经改变后的state的值
    // console.log(this.state);// 上一次的 未改变的state的值
    return nextState.completed !== this.state.completed
  }
}
