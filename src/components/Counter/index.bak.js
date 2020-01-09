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
/*Provider里面包住的东西就可以通过counterConsumer进行共享了 */
// Provider包住的在下面

// 定义一个CounterApp组件
class CountApp extends Component {
  render() {
    return(
      // 要想接收共享的数据 就得将这个CounterConsumer放在最外面包裹
      // 而且CounterConsumer里面必须要是一个function;
      /*回调函数里的参数 就是我们在Provider里传的数据对象;也就是Provider里的value*/

      // 使用CounterConsumer来接收共享数据值
      <CounterConsumer>
        {
          // (args) => {
          //   // 写js的时候要return
          //   return(
          //     <span>{args.count}</span>
          //   )
          // }
          /*既然是对象, 那我们就可以把它给解构出来 */
          ({count}) => {
            return(
            <span>{count}</span>
            )
          }
          
        }
      </CounterConsumer>
    )
  }
}
/*之前我们将加和减的方法放在当前组件内部;现在有了context我们使用context来做 */
class CountBtn extends Component {
  render() {
    return(
      <CounterConsumer>
        {
          // 将方法解构出来
          ({increasement, decreasement}) => {
            // 通过传进来的type值来判断调用增加还是减少的方法
            const hander = this.props.type;
            return (
              <button onClick={() => {
                // 判断调用哪个方法
                if (hander === "decresement") {
                  // 执行decreament方法
                  decreasement();
                } else {
                  increasement();
                }
              }}>
                {this.props.children}
              </button>
            )
          }
        }
      </CounterConsumer>
    )
  }
}

// 这是我们要暴露出去的组件 里面包括按钮和显示数字的组件
// 这些组件我们还没有定义和引入 我们需要在上面定义和引入

export default class Counter extends Component {
  render() {
    return (
      <CounterProvider>
        {/* 使用children的方式传入加号 和减号 */}
        <h2>context中的</h2>
        <CountBtn type="decresement">-</CountBtn>
        <CountApp></CountApp>
        <CountBtn type="incresement">+</CountBtn>
      </CounterProvider>
    )
  }
}