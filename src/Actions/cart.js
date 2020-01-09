// 把我们外面定义的actionType给导进来
import actionType from './actionType'

// 然后我们在这里定义一些action(也就是方法)

// 定义action的第一种方式,不好传递参数

// // 增加的方法
// export const increment = {
//   type: actionType.CART_AMOUNT_INCREASEMENT
// }

// // 减少的方法

// export const decreasement ={
//   type: actionType.CART_AMOUNT_DECREASEMENT
// }

/*传入参数最好的作用就是还能够传入一个id;
用来告诉我们是哪个使用了的;实际开发中用一个payLoad字段来表示 */

/* 在工作中常用的一种方式是使用actionCreator,他是一个方法,返回一个对象;
对象才是action,所以我们现在的方法叫actionCreator
*/
// 增加的方法
export const increment = (id) => {
  // 测试能否进来
  // console.log(id)
  return {
    type: actionType.CART_AMOUNT_INCREASEMENT,
    payLoad: {
      id
    }
  }
}

// 减少的方法

export const decreasement = (id) => {
  // 测试动作是否绑定成功
  // console.log(id)
  return {
    type: actionType.CART_AMOUNT_DECREASEMENT,
    payLoad: {
      id
    }
  }
}

