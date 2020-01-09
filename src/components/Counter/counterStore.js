import React, {Component, createContext} from 'react'
// 跨组件传值

// 将createContext的Provider和Consumer解构出来
const {
  Provider,
  Consumer: CounterConsumer //解构出来的Consumer重新赋值给CounterConsumer
} = createContext()
// 定义一个空组件,在这里组件里面只进行render它的子组件
// 封装一个Provider 因为直接使用Provider不方便进行管理状态
class CounterProvider extends Component {
  constructor() {
    super();
    // 这里的状态就是共享的 任何CounterProvider的后代组件都可以通过CounterConsumer来接收这个值
    this.state = {
      count: 30 // counterApp组件里的值来自共享数据里的
    }
  }
  
  render() {
    return(
      // value里的值就是我们要传递的值 最好是个对象
      <Provider value={{
        count: this.state.count,   // 传递count的值 给包裹住的子组件
        increasement: this.increasement, // 传递方法
        decreasement: this.decreasement
      }}>
        {this.props.children}
      </Provider>
    )
  }
  // 增加和修改的方法
  // 这里的方法也会通过CounterConsumer共享下去
  increasement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decreasement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
}
// 我们需要将Provider和Consumer导出

export {
  CounterProvider,
  CounterConsumer
}


