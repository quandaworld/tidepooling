import React from 'react'
import Header from '../components/home/Header'
import Search from '../components/home/Search'
import Intro from '../components/home/Intro'
import Blogs from '../components/home/Blogs'
import Footer from '../components/home/Footer'

function Home() {
  return (
    <div className='max-w-full w-11/12 mx-auto'>
      <Header />
      <Search />
      {/* <Intro /> */}
      {/* <Blogs /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default Home