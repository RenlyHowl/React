// 导入CounterConsumer
import React, {Component} from 'react'
import {CounterConsumer} from '../counterStore'


/*之前我们将加和减的方法放在当前组件内部;现在有了context我们使用context来做 */
export default class CountBtn extends Component {
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