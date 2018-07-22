import React from 'react'
import { Checkbox } from 'antd'
const Todo = ({ content, onClick, completed }) => (
  <li >
    <div>
      <Checkbox
        style={
          {
            textDecoration:
              completed ?
              'line-through' :
              'none',
            color:
              completed ?
              '#d9d9d9' :
              '#4d4d4d'
          }
        }
        onChange={onClick}
        checked={completed ? true : false}>
        {content}
      </Checkbox>
    </div>
    <style jsx>{`
      li {
        list-style: none;
      }
      a {
        text-decoration: none;
      }
    `}</style>
  </li>
  
)

export default Todo