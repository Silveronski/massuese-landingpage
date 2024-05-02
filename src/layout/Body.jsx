import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComp from '../components/CarouselComp';
import AboutMe from '../components/AboutMe';
import Treatments from '../components/Treatments';
import Services from '../components/Services';
import Products from '../components/Products';
import Gallery from '../components/Gallery';
import leaf1 from '../assets/images/leaf1.png';
import leaf2 from '../assets/images/leaf2.png';
import leaf3 from '../assets/images/leaf3.png';

const Body = () => {
  return (
    <main> 
      <CarouselComp/>
      <AboutMe/>
      <Treatments/>
      <Services/>
      <Products/>
      <Gallery/>
      <img className='leaf' id='leaf1' src={leaf2} alt="" />
      <img className='leaf' id='leaf2' src={leaf1} alt="" />
    </main>
  )
}

export default Body