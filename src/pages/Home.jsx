import React from 'react';
import Navbar from '../layout/Navbar'
import Contact from '../layout/Contact';
import Body from '../layout/Body';
import whatsapp from '../assets/images/whatsapp.png';
import content from '../site-content-json/content.json';

const Home = () => {
  return (
    <div className='site-container'>
        <Navbar/>
        <Body/>
        <Contact/>
        <img src={whatsapp} className='whatsapp-icon' onClick={() => window.open(`${content.general.whatsapp}`, "_blank")} alt=""/>
    </div>
  )
}

export default Home