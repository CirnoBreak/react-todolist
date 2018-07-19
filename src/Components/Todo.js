import React from 'react'

const Todo = ({ content }) => (
  <li>
    <a href="/#">{ content }</a>
    <style jsx>{`
      a {
        text-decoration: none;
        color: red;
      }
    `}</style>
  </li>
  
)

export default Todo