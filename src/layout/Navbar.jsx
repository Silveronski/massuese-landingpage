import { useEffect, useRef, useState } from 'react';
import close from '../assets/images/close.png';
import hamburger from '../assets/images/hamburger.png';

const Navbar = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(hamburger);
  const navbar = useRef();
  const imgRef = useRef();

  const handleHamburgerClick = () => {
    if (navbar.current.style.animation !== "") return;
    if (isNavbarOpen) closeNavbar();     
    else openNavbar();       
  }

  const openNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    setImgSrc(close);
    navbar.current.style.animation = "slideInFromAbove 0.3s ease";
    navbar.current.style.display = 'block'; 
    setTimeout(() => {
      navbar.current.style.animation = "";
    }, 550);
  }

  const closeNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    setImgSrc(hamburger);
    navbar.current.style.animation = "slideInFromDown 0.3s ease"; 
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
  

  useEffect(() => {
    if (window.innerWidth <= 480) return;

    const scrollWatcher = document.createElement('div');
    scrollWatcher.setAttribute('data-scroll-watcher', ''); // sets a custom attribute to add info to this element

    navbar.current.before(scrollWatcher); // inserts scrollWatcher before the navabr on the DOM

    const navObserver = new IntersectionObserver((entries) => {
      navbar.current.classList.toggle('sticking', !entries[0].isIntersecting);
    });

    navObserver.observe(scrollWatcher);
  },[]);

  return (
    <header>
        <img ref={imgRef} onClick={handleHamburgerClick} className='hamburger' src={imgSrc} alt="mobile menu icon"/> 
        <nav ref={navbar} className='main-navbar'>
            <ul>
                <li onClick={() => handleNavbarNavigation()} className='navbar-logo'>Jane Doe - Masseuse</li> 
                <li onClick={() => handleNavbarNavigation(".aboutMe-container")}>About</li>
                <li onClick={() => handleNavbarNavigation(".treatments-container")}>Treatments</li>
                <li onClick={() => handleNavbarNavigation(".services-container")}>Services</li>
                <li onClick={() => handleNavbarNavigation(".my-products-container")}>Products</li>
                <li onClick={() => handleNavbarNavigation(".contact-us-container")}>Contact Us</li>                                      
            </ul>
        </nav>
    </header>
  )
}

export default Navbar