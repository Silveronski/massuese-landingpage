import { useEffect, useRef, useState } from 'react';
import Logo from '../assets/images/Logo.png';
import close from '../assets/images/close.png';
import hamburger from '../assets/images/hamburger.png';

const Navbar = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbar = useRef();
  const imgRef = useRef();

  const handleHamburgerClick = () => {
    if (navbar.current.style.animation !== "") return;

    if (isNavbarOpen) {
      closeNavbar();
    }  
    else {
      setIsNavbarOpen(!isNavbarOpen);
      navbar.current.style.animation = "slideInFromAbove 0.5s ease";
      navbar.current.style.display = 'block';
      setTimeout(() => {
        navbar.current.style.animation = "";
      }, 550);
      setTimeout(() => {
        imgRef.current.src = close; 
        imgRef.current.style.width = '35px';       
      }, 400);
    }
  }

  const closeNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    imgRef.current.src = hamburger;
    imgRef.current.style.width = '45px'; 
    navbar.current.style.animation = "slideInFromDown 0.7s ease"; 
    navbar.current.addEventListener("animationend", onAnimationEnd);     
  }

  const onAnimationEnd = () => {
    navbar.current.style.display = 'none';
    navbar.current.style.animation = "";
    navbar.current.removeEventListener("animationend", onAnimationEnd);
  }

  const handleNavbarNavigation = (headerClicked) => {
    let offset = 0;
    if (headerClicked) offset = document.querySelector(headerClicked).offsetTop;

    window.scrollTo({
      top: offset - document.querySelector('.main-navbar').offsetHeight,
      behavior: 'smooth'
    });

    window.innerWidth <= 480 && closeNavbar();
  }

  useEffect(() => {
    const handleTouch = (e) => {
      if (isNavbarOpen && window.innerWidth <= 480 &&
         e.target.localName !== "li" && e.target.localName !== "ul" && e.target.className !== "hamburger") {
          closeNavbar();
      }
    }

    document.addEventListener('touchstart', handleTouch);
    return () => document.removeEventListener('touchstart', handleTouch);

  },[isNavbarOpen]); 

  return (
    <header>
        <img ref={imgRef} onClick={handleHamburgerClick} className='hamburger' src={hamburger} alt=""/> 
        <nav ref={navbar} className='main-navbar'>
            <ul>
                <li onClick={() => handleNavbarNavigation(".contact-us-container")}>צור קשר</li>
                <li onClick={() => handleNavbarNavigation(".my-products-container")}>מוצרים</li>
                <li onClick={() => handleNavbarNavigation(".services-container")}>שירותים</li>
                <li onClick={() => handleNavbarNavigation(".treatments-container")}>טיפולים</li>
                <li onClick={() => handleNavbarNavigation(".aboutMe-container")}>עליי</li>                    
                <li onClick={() => handleNavbarNavigation()} className='navbar-logo'><img src={Logo} alt=""/> אנה - לב פתוח לגוף ולנפש</li>             
            </ul>
        </nav>
    </header>
  )
}

export default Navbar