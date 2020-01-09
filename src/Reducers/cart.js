// reducer方法里面也有两个参数(这里的reducer相当于我们的changeState)
// 一个是state,另一个是action
// 数据状态的初始化我们需要在reducer里面初始化;

// 导入actionType
/*
为了避免我们的actionType重复,所以一般会把我们的actionType放在一个文件夹里面管理;
也可以避免actionType的写错
*/
import actionType from '../Actions/actionType'


// 初始化默认状态
// 定义我们要渲染的购物车的数据
// 创建购物车的初始状态
const initState = [{
  id: 1,
  tittle: "Apple",
  price: "8888.88",
  amount: 10
}, {
  id: 2,
  tittle: "huawei",
  price: "4888.88",
  amount: 55
}]

/*
我们这里的action就相当于action目录下这个方法返回的对象;
每次动作监听到了就被reducer给收到
*/

// 创建购物车的reducer
/*
两个参数,第一个就是state并有一个初始值;第二个是action(这里的action是形参)
*/
const cartReducer = (state = initState, action) => {
  // 如果没传 就等于初始值状态
  // console.log(action) // 测试监听器是否绑定上
  /*
  根据不同的action.Type做不同的处理,每次返回一个新的state;
  返回的类型要一样(和原来我们定义的state)
  */
  switch (action.type) {
    case actionType.CART_AMOUNT_INCREASEMENT:
    // console.log("加加加"); 
    return state.map((item) => {
        if (item.id === action.payLoad.id) {
          item.amount += 1;
        }
        return item
      })
    case actionType.CART_AMOUNT_DECREASEMENT:
      // 这里要注意Array.map方法的使用
      return state.map((item) => {
        // console.log("减减减");
        if (item.id === action.payLoad.id) {
          item.amount -= 1;
        }
          return item
      })
    default:
      return state; // 无操作 默认返回state
  }


}

export default cartReducer