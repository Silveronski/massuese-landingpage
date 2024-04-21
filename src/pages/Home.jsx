import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Body from '../components/Body';

const Home = () => {
  return (
    <div className='site-container'>
        <Navbar/>
        <Body/>
        <Contact/>
    </div>
  )
}

export default Home