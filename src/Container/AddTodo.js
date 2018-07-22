import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action'
import { Input } from 'antd'

let AddTodo = ({ dispatch }) => {
  return (
    <header>
      <h1>Todos</h1>
      <Input
        onPressEnter={(e) => {
          if (e.target.value) {
            dispatch(addTodo(e.target.value))
            e.target.value = null
          }
        }}
        placeholder="接下来要做什么"
        autoFocus>
      </Input>
    </header>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo