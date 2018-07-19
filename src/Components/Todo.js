import React from 'react'

const Todo = ({ content }) => (
  <li>
    <a href="/#">{ content }</a>
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
  </li>
  
)

export default Todo