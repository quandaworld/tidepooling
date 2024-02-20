import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Intro from '../components/Intro'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Header />
      <Search />
      <Intro />
      <Blogs />
      <Footer />
    </div>
  )
}

export default Home