import React, { Component } from 'react'
import propTypes from 'prop-types'
export default class TodoHeader extends Component {
  static propTypes = {
    desc: propTypes.string.isRequired,
    children: propTypes.element.isRequired
  }
  static defaultProps = {
    desc: "我是新的desc"
  }
  render() {
    // console.log(this);
    const {children, desc} = this.props;
    return (
        <>
          <h1>TodoHeader:{children}</h1>
          {/* <h1>TodoHeader:{this.props.children || "这是什么标题啊"}</h1> */}
          <h3>{desc}</h3>
        </>
    )
  }
}

// import React from 'react'

// export default function TodoHeader(props) {
//   return (
//   <>
//       <h1>TodoHeader:{props.children}</h1>
//       <h3>{props.desc}</h3>
//   </>
//   )
// }
// TodoHeader.propTypes = {
//   desc: propTypes.number
// }

