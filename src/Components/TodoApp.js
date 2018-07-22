import React, { Component } from 'react';
import AddTodo from '../Container/AddTodo'
import VisibleTodoList from '../Container/VisibleTodoList'
import Footer from './Footer'
import { Row, Col } from 'antd'
class TodoApp extends Component {
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={12}>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </Col>
        <style jsx>{`
          
        `}</style>
      </Row>
    )
  }
}

export default TodoApp
