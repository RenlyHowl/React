import React, { Component } from 'react'

import CartList from './CartList'

export default class Redux extends Component {
  render() {
    return (
      <>
        <CartList store={this.props.store}></CartList>
      </>
    )
  }
}
