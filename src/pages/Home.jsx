import React from 'react';
import Navbar from '../layout/Navbar'
import Contact from '../layout/Contact';
import Body from '../layout/Body';
import whatsapp from '../assets/images/whatsapp.png';

const Home = () => {
  return (
    <div className='site-container'>
        <Navbar/>
        <Body/>
        <Contact/>
        <img src={whatsapp} className='whatsapp-icon' onClick={() => window.open("https://wa.me/972547933887", "_blank")} alt=""/>
    </div>
  )
}

export default Home