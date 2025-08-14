import React from 'react'

const Button = ({ name }) => {
  return (
    <button className='butn hover:text-white'>
    {name}
    </button>
  )
}

export default Button