import React, {Component} from 'react'
import {CounterProvider} from './counterStore'
import CountApp from './CountApp'
import CountBtn from './CountBtn'

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

















//--------------------------------------------------------










