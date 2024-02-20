import React from 'react'
import banner from '/assets/banner.jpeg'
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <div className='flex justify-center flex-col'>
      <img src={banner} className='rounded-md'/>
      <div className='flex items-center gap-2 bg-white shadow-lg p-3 rounded-md mt-[-20%] mx-[20%]'>
        <IoSearchOutline className='text-[20px] text-gray-500'/>
        <input 
          type='text' 
          placeholder='Search tide levels by zip' 
          className='outline-none'
        />
      </div>
    </div>
  )
}

export default Search