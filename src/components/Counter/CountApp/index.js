// 导入CounterConsumer
import React, {Component} from 'react'
import {CounterConsumer} from '../counterStore'

// 定义一个CounterApp组件
export default class CountApp extends Component {
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