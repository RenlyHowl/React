import React, { Component } from 'react'
// 引入我们的cart组件的action
import {decreasement, increment} from '../../../Actions/cart'


export default class CartList extends Component {
  constructor(props) {
    super();
    this.state = {
      CartList: []
    }
  }
  // 我们可以在这个生命周期函数里去接收它
  // static getDerivedStateFromProps(nextProps, preState) {
  //   if(nextProps.store.getState().cart !== preState.CartList) {
  //     return {
  //       CartList: nextProps.store.getState().cart
  //     }
  //   } 
  //   return null
  // }

  // 我们把上面这个初始化数据放在下面componentDidMount里去做
  
  // 注册一个监听器,注意监听器执行的地方是在componentDidMount这个生命周期函数里面

  // 先定义一个改变值的方法;
  /*
  既然有改变值的方法,那我们上面的生命周期初始化值就可以
  放在componentDidMount这个生命周期函数里了
  */
  changeState = () => {
    this.setState({
      CartList: this.props.store.getState().cart
    })
  }
  // 这种和上面的搭配
  // componentDidMount() {
  //   this.props.store.subscribe(this.changeState)
  // }
  componentDidMount() {
    this.changeState();
    this.props.store.subscribe(this.changeState)
  }
  
  render() {
    // console.log(this.state.CartList)
    // console.log(this.props.store.getState())
    return (
      <table>
        <thead>
          <tr>
            <th>商品ID</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>

        <tbody>
        {
           this.state.CartList.map((element) => {
             return (
              // 不要忘记加id
              <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.tittle}</td>
              <td>{element.price}</td>
              <td>
                <button onClick={() => {
                  this.props.store.dispatch(increment(element.id))
                }}>+</button>
                <span>{element.amount}</span>
                <button onClick={() => {
                  this.props.store.dispatch(decreasement(element.id))
                }}>-</button>
              </td>
              <td></td>
            </tr>
             )
           })
         }
        </tbody>
      </table>
    )
  }
}
