import React, { Component } from 'react'

import TodoItem from './TodoItem'

export default class TodoList extends Component {
  state = {
    list: "我是TodoList456"
  }
  render() {
    return (
      <ul>
        <p>{this.state.list}</p>
        {this.props.todo.map(el => {
          return (
            <TodoItem key={el.id} {...el}></TodoItem>
          )
        })}
      </ul>
     
    )
  }
}
