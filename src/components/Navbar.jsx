import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/images/Logo.png';
import close from '../assets/images/close.png';
import hamburger from '../assets/images/hamburger.png';

const Navbar = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbar = useRef();
  const imgRef = useRef();

  const handleHamburgerClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
    if (isNavbarOpen) {
      closeNavbar();
    }
    else {
      navbar.current.style.animation = "slideInFromAbove 0.4s ease";
      navbar.current.style.display = 'block';
      setTimeout(() => {
        imgRef.current.src = close;        
      }, 150);
    }
  }

  const closeNavbar = () => {
    imgRef.current.src = hamburger;
    navbar.current.style.animation = "slideInFromDown 0.7s ease"; 
    navbar.current.addEventListener("animationend", onAnimationEnd, { once: true });   
  }

  const handleNavbarNavigation = (headerClicked) => {
    let offset = 0;
    switch (headerClicked) {
      case "contact":
        offset = document.querySelector('.contact-us-container').offsetTop;
        break;

      case "products":
        offset = document.querySelector('.my-products-container').offsetTop;
        break;

      case "treatments":
        offset = document.querySelector('.treatments-container').offsetTop;
        break;

      case "about":
        offset = document.querySelector('.aboutMe-container').offsetTop;
        break;
    }   

    window.scrollTo({
      top: offset - document.querySelector('.main-navbar').offsetHeight,
      behavior: 'smooth'
    });

    closeNavbar();
  }
  
  const onAnimationEnd = () => {
    navbar.current.style.display = 'none';
  }

  // useEffect(() => {
  //   const handleTouch = () => {
  //     if (isNavbarOpen && window.innerWidth <= 480) {
  //       closeNavbar();
  //     }
  //   }

  //   document.addEventListener('touchstart', handleTouch);
  //   return () => document.removeEventListener('touchstart', handleTouch);
  // },[isNavbarOpen]); 

  return (
    <header>
        <img ref={imgRef} onClick={handleHamburgerClick} className='hamburger' src={hamburger} alt=""/> 
        <nav ref={navbar} className='main-navbar'>
            <ul>
                <li onClick={() => handleNavbarNavigation("contact")}>צור קשר</li>
                <li onClick={() => handleNavbarNavigation("products")}>מוצרים</li>
                <li onClick={() => handleNavbarNavigation("treatments")}>טיפולים</li>
                <li onClick={() => handleNavbarNavigation("about")}>עליי</li>                    
                <li className='navbar-logo'><img src={Logo} alt=""/> אנה - לב פתוח לגוף ולנפש</li>              
            </ul>
        </nav>
    </header>
  )
}

export default Navbar