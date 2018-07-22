import React, { Component } from 'react';
import AddTodo from './AddTodo'
// import TodoList from './TodoList'
import VisibleTodoList from '../Container/VisibleTodoList'
import Footer from './Footer'
// import defaultTodos  from '../mock/todos'
import { Row, Col } from 'antd'
class TodoApp extends Component {
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={12}>
          <AddTodo />
          <VisibleTodoList />
          {/* <TodoList todos={defaultTodos } /> */}
          <Footer />
        </Col>
        <style jsx>{`
          
        `}</style>
      </Row>
    )
  }
}

export default TodoApp
