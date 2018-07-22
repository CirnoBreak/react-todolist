import { todos } from './reducer'
import { createStore } from 'redux'
import defaultTodos from './mock/todos'


const store = createStore(todos, defaultTodos)

export default store