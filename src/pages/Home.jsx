import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Body from '../components/Body';
import whatsapp from '../assets/images/whatsapp.png';

const Home = () => {

  const handleClick = () => {
    window.open("https://wa.me/972547933887", "_blank");
  }

  return (
    <div className='site-container'>
        <Navbar/>
        <Body/>
        <Contact/>
        <img src={whatsapp} onClick={handleClick} alt="" className='whatsapp-icon'/>
    </div>
  )
}

export default Home