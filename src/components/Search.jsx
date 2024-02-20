import React from 'react'
import banner from '/assets/banner.jpeg'
import { IoSearchOutline } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';

function Search() {
  return (
    <div className='flex justify-center flex-col'>
      <h1 className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-11/12 z-10 lg:text-7xl md:text-4xl text-xl font-bold text-white [text-shadow:1px_3px_2px_var(--tw-shadow-color)] shadow-slate-500'>
        Low tides today at 
        <TypeAnimation 
          sequence={[
            'La Jolla Beach',
            2000, 
            'Cabrillo National Monument',
            2000,
            'Duxbury Reef Reserve',
            2000,
            'Shi Shi Beach',
            2000
          ]}
          wrapper="span"
          speed={40}
          className='lg:pl-5 pl-1.5'
          repeat={Infinity}
        />
      </h1>
      <img src={banner} className='rounded-md'/>
      <div className='flex items-center gap-2 bg-white/80 shadow-lg shadow-slate-800 p-3 rounded-md mt-[-20%] mx-[20%]'>
        <IoSearchOutline className='text-[20px] text-gray-500'/>
        <input 
          type='text' 
          placeholder='Search tide levels by zip' 
          className='outline-none bg-transparent placeholder-gray-500'
        />
      </div>
    </div>
  )
}

export default Search