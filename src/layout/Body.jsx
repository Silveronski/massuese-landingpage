import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComp from '../components/CarouselComp';
import AboutMe from '../components/AboutMe';
import Treatments from '../components/Treatments';
import Services from '../components/Services';
import Products from '../components/Products';
import Gallery from '../components/Gallery';

const Body = () => {
  return (
    <main> 
      <CarouselComp/>
      <AboutMe/>
      <Treatments/>
      <Services/>
      <Products/>
      <Gallery/>
    </main>
  )
}

export default Body