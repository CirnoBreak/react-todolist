import Mock from 'mockjs'
const defaultTodos  = []

for (let i = 0; i < 10; i++) {
  defaultTodos.push(Mock.mock({
    id: i,
    content: '学习' + Mock.mock('@csentence(5)')
  }))
}

export default defaultTodos 