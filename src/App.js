import React, { Component,Fragment} from 'react'

import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like,
  Counter,
  Another,
  Redux,
  ReactRedux
} from './components'



import {getTodos} from './services'
export default class App extends Component {
  constructor() {
    super();


    this.state = {
      title: '<h1>我的<i>中国</i>心</h1>',
      lists: [
        // 假数据
        // {
        //   id: 1,
        //   title: "吃饭test",
        //   assigner: "leo",
        //   completed: true
        // },
        // {
        //   id: 2,
        //   title: "睡觉test",
        //   assigner: "renly",
        //   completed: false
        // }
      ],
      isLoading: true // 默认数据没获取到
    }
  }
  addtodo = (todotitle) => {
    this.state.lists.push({
      id: this.state.lists.length + 1,
      title: todotitle
    })
    this.setState({
      lists: this.state.lists
    })
  }
  render() {
    
    return (
      <Fragment>
        <ReactRedux></ReactRedux>
        <Another name="another"></Another>
        <TodoHeader desc="hahaha">
          <i>标题真想不出来</i>
        </TodoHeader>
        {/* 继续往store往下传 */}
        <Redux store = {this.props.store}></Redux>
        <Counter></Counter>
        <TodoInput addtodo={this.addtodo} />
        {
          this.state.isLoading
          ?
          <h1>isLoading</h1>
          :
          <TodoList todo={this.state.lists}></TodoList>
        }
        我是App组件<Like></Like>
      </Fragment>
    )
  }

  // 请求数据的方法
  getData = () => {
    // 这里使用延时再发送ajax请求来模拟 网络不好的时候显示正在加载中
    setTimeout(() => {
      getTodos()
    .then((res) => {
      if (res.status === 200) {
          this.setState({
            lists: res.data
          })
      } else {

      }
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      this.setState({
        isLoading: false
      })
    })
    }, 2000)
  }
  componentDidMount() {
    this.getData();
  }
}

// export default withCopyright(App)