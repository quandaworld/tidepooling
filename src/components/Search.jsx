import React from 'react'
import banner from '/assets/banner.jpeg'
import { IoSearchOutline } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';

function Search() {
  return (
    <div className='flex relative justify-center flex-col'>
      <div className='flex flex-col md:gap-4 text-center font-bold text-cyan-950 bg-white/40 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-10 w-full md:mt-5 md:p-5'>
        <h1 className='lg:text-5xl md:text-2xl text-lg'>Low tides today at</h1>
        <h1 className='lg:text-7xl md:text-4xl text-xl'>
          <TypeAnimation
            sequence={[
              'La Jolla Beach',
              3000,
              'Cabrillo National Monument',
              3000,
              'Duxbury Reef Reserve',
              3000,
              'Shi Shi Beach',
              3000
            ]}
            wrapper="span"
            speed={200}
            repeat={Infinity}
          />
        </h1>
      </div>
      <img src={banner} className='rounded-md'/>
      <div className='flex items-center text-xl gap-2 bg-white/80 shadow-lg shadow-slate-800 p-3 rounded-md mt-[-15%] mx-[20%]'>
        <IoSearchOutline className='text-[22px] text-gray-500'/>
        <input 
          type='text' 
          placeholder='Search tide levels by zip code' 
          className='outline-none bg-transparent placeholder-gray-500'
        />
      </div>
    </div>
  )
}

export default Search