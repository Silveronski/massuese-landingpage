import React, { useRef, useState } from 'react';
import Logo from '../assets/images/Logo.png';
import close from '../assets/images/close.png';
import hamburger from '../assets/images/hamburger.png';

const Navbar = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbar = useRef();
  const imgRef = useRef();

  const onAnimationEnd = () => {
    navbar.current.style.display = 'none';
  }

  const handleHamburgerClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
    if (isNavbarOpen){
      imgRef.current.src = hamburger;
      navbar.current.style.animation = "slideInFromDown 0.4s ease";  
      navbar.current.addEventListener("animationend", onAnimationEnd, { once: true });    
    }
    else {
      navbar.current.style.animation = "slideInFromAbove 0.4s ease";
      navbar.current.style.display = 'block';
      setTimeout(() => {
        imgRef.current.src = close;        
      }, 150);
    }
  }

  return (
    <header>
        <img ref={imgRef} onClick={handleHamburgerClick} className='hamburger' src={hamburger} alt=""/> 
        <nav ref={navbar} className='main-navbar'>
            <ul>
                <li>צור קשר</li>
                <li>טיפולים</li>
                <li>עליי</li>                    
                <li className='navbar-logo'><img src={Logo} alt=""/> אנה - לב פתוח לגוף ולנפש</li>              
            </ul>
        </nav>
    </header>
  )
}

export default Navbar