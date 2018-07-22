import React from 'react'
import Link from './Link'

const Footer = () => (
  <div>
    <Link filter="all">
      全部
    </Link>
    <Link filter="active">
      待办
    </Link>
    <Link filter="complete">
      已完成
    </Link>
  </div>
)

export default Footer