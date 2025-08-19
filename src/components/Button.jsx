import React from 'react'

const Button = ({name}) => {
  return (
    <button className='overflow-hidden capitalize md:text-lg border border-black md:px-3 md:py-2 cursor-pointer rounded-full fill-up relative text-sm p-2'>{name}</button>
  )
}

export default Button