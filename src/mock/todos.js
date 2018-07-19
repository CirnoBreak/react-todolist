import Mock from 'mockjs'
const todos = []

for (let i = 0; i < 10; i++) {
  todos.push(Mock.mock({
    id: i,
    content: '学习' + Mock.mock('@csentence(5)')
  }))
}

export default todos