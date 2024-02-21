import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between pt-5 pb-6'>
      <h1 className='text-3xl md-text-4xl font-bold text-cyan-700'>tidepooling.com</h1>
      <ul className='md:flex gap-4 md:gap-20 md:text-lg'>
        <li className='hover:text-cyan-700 hover:underline hover:underline-offset-4 font-semibold cursor-pointer'>Home</li>
        <li className='hover:text-cyan-700 hover:underline hover:underline-offset-4 font-semibold cursor-pointer'>Find Pools</li>
        <li className='hover:text-cyan-700 hover:underline hover:underline-offset-4 font-semibold cursor-pointer'>Talk Pools</li>
        <li className='hover:text-cyan-700 hover:underline hover:underline-offset-4 font-semibold cursor-pointer'>Log In</li>
      </ul>
      <button
        className='text-center px-5 py-1 bg-cyan-700 hover:bg-cyan-900 w-max font-medium text-white rounded-md cursor-pointer'
      >
        Sign Up
      </button>
    </div>
  )
}

export default Header