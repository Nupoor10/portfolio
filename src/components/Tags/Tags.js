import React from 'react';
import "./Tags.css"

const Tags = ({text}) => {
  return (
    <span className='tags__container'>{text}</span>
  )
}

export default Tags