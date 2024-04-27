import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Body from '../components/Body';
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