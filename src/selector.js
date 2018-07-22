const getVisibleTodos = (state, filter) => {
  console.log(filter)
  switch (filter) {
    case 'all':
      return state
    case 'active':
      return state.filter(t => !t.completed)
    case 'complete':
      return state.filter(t => t.completed)
    default:
      return state
  }
}

export default getVisibleTodos