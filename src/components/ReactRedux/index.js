import React, { Component } from 'react'
// 引入我们的cart组件的action

// 要导入action目录下对应里的action (导入actionCreators)
import {increment, asynDecreasement, decreasement} from '../../Actions/cart'


// 在需要使用store的组件导入react-redux的connect
import { connect} from 'react-redux'
/*connect方法的返回值是一个高阶组件 */


import { ReactRedux } from '..';

// 装饰器写法
// @connect(mapStateToProps, {increment, decreasement})

class Index extends Component {
  constructor(props) {
    super();
    this.state = {
      
    }
  }

  render() {
    // console.log(this.props);
    // 进行参数的渲染
    return (
      
      <>
        <h1>reactRedux</h1>
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
           this.props.CartList.map((element) => {
             return (
              // 不要忘记加id
              <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.tittle}</td>
              <td>{element.price}</td>
              <td>
                <button onClick={() => {this.props.asynDecreasement(element.id)}}>等一会在减</button>
                <button onClick={() => {
                  // this.props.increment.bind(this,element.id)
                  this.props.increment(element.id)
                }}>+</button>
                <span>{element.amount}</span>
                <button onClick={() => {
                  // this.props.dispatch(decreasement(element.id))
                  // this.props.decreasement.bind(this,element.id)
                  this.props.decreasement(element.id)
                }}>-</button>
              </td>
              <td></td>
            </tr>
             )
           })
         }
        </tbody>
      </table>
      </>
    )
  }
}

// 当然这个方法的名字是自定义的
/* 这个方法的作用就是把store里的state注入到我们的组件中;
组件就可以通过this.props.CartList来获取了*/
const mapStateToProps = (state) => {
  // console.log(state);
  // 里面的参数state就是我们store里的getState()方法返回的state
  return {
    CartList: state.cart
  }
}

// 再定义一个方法解构props上的action,变成方法
// const mapDispatchToProps = dispatch => {
//   return {
//     add: (id) => dispatch(increment(id)),
//     substract: (id) => dispatch(decreasement(id))
//   }
// }
// 然后我们上面在使用这个方法的时候也要做出相应的调整


// export default connect(mapStateToProps, mapDispatchToProps)(Index) 
// 注意这里有两个括号,第二个括号传我们的当前组件
// 那么当前组件的props属性下就多了一个dispatch的东西
// 但是当前组件还是没有我们的state

/*我们的第一个参数就是我们需要传的state;
这样就达到了我们并没有在他的组件上进行参数的传递,
也能够让该组件上的props属性上挂载
*/

export default connect(mapStateToProps, {increment, decreasement,asynDecreasement})(Index) 
// 在上面使用装饰器的写法



// 然后我们就可以直接在props上调increment和decreasement的方法
/*
第二个参数的作用就是:action的方法注入到当前组件中;
在组件内部就可以通过this.props.actionCreator来调用,
在调用之后他会自动的将我们内部的action给dispatch出去
*/

// export default Index


