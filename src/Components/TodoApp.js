import React, { Component } from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'
import todos from '../mock/todos'

class TodoApp extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList todos={todos} />
        <Footer />
      </div>
    )
  }
}

export default TodoApp
