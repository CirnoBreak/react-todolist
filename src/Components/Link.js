import React from 'react'

const Link = ({ children }) => (
  <React.Fragment>
    <a href="/#">{children}</a>
    <style jsx>{`
      a {
        text-decoration: none;
        margin-right: 5px;
        display: inline-block;
      }
      
    `}</style>
  </React.Fragment>
)

export default Link