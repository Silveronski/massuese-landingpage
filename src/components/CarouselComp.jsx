import Carousel from 'react-bootstrap/Carousel';
import one from '../assets/images/one.jpg';
import two from '../assets/images/two.jpg';
import three from '../assets/images/three.jpg';
import { motion } from 'framer-motion';
import { carouselImgVariants, carouselInfoVariants } from '../utils/Variants';
import content from '../site-content-json/content.json';

const CarouselComp = () => {
  return (
    <div className='carousel-container'>

      <motion.div 
        variants={carouselInfoVariants}
        initial="hidden"
        animate="show"
        className='info'>
        <h1>{content.general.name}</h1>          
        <p><span>Senior masseuse</span> <i>&</i> <span>Natural Pharmacist</span></p>
        <button         
         onClick={() => window.open("https://wa.me/123123123", "_blank")}>BOOK A VISIT
        </button>
      </motion.div>

      <Carousel>     
        <Carousel.Item>
            <motion.img 
            variants={carouselImgVariants}
            initial="hidden"
            animate="show" 
            src={one}/>                     
        </Carousel.Item>

        <Carousel.Item>
            <img src={two}/>   
        </Carousel.Item>

        <Carousel.Item>     
            <img src={three}/>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default CarouselComp