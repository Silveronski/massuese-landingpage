import React from 'react';
import Logo from '../assets/images/Logo.png';
import hamburger from '../assets/images/hamburger.png';

const Navbar = () => {
  return (
    <header>
        <nav className='main-navbar'>
            <img className='hamburger' src={hamburger} alt="" />
            <ul>
                <li>צור קשר</li>
                <li>טיפולים</li>
                <li>עליי</li>                    
                <li><img src={Logo} alt=""/> אנה - לב פתוח לגוף ולנפש</li>              
            </ul>
        </nav>
    </header>
  )
}

export default Navbar