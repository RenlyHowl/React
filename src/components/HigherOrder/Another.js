import React, { Component } from 'react'
import withCopyright from './index'


// class Another extends Component {
//   render() {
//     return (
//       <>
//         我是{this.props.name}
//       </>
//     )
//   }
// }

// export default withCopyright(Another)



/*装饰器的写法 */
@withCopyright

/*消除这个红色的装饰器警告就是在根目录下配置一个tsconfig.json文件 */
class Another extends Component {
  render() {
    return (
      <>
        Another我是{this.props.name}
      </>
    )
  }
}

export default Another
