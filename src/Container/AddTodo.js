import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action'
import { Input } from 'atnd'

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <header>
      <h1>Todos</h1>
      <Input
        onKeyDown={(e) => {
          if (input.value && e.keyCode === 13) {
            dispatch(addTodo(input.value))
          }
        }}
        ref={node => input = node}
        placeholder="接下来要做什么"
        autoFocus>
      </Input>
    </header>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo