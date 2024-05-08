import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';
import { carouselImgVariants, carouselInfoVariants } from '../utils/Variants';
import content from '../site-content-json/content.json';
import gallery7 from '../assets/images/gallery7.png';
import gallery8 from '../assets/images/gallery8.png';
import carouselImg from '../assets/images/carouselImg.jpg';

const CarouselComp = () => {
  return (
    <div className='carousel-container'>
      <div className='gradient'></div>
      <motion.div 
        variants={carouselInfoVariants}
        initial="hidden"
        animate="show"
        className='info'>
        <h1>{content.general.name}</h1>          
        <p><span>Senior masseuse</span> <i>&</i> <span>Natural Pharmacist</span></p>
        <button         
         onClick={() => window.open(`${content.general.whatsapp}`, "_blank")}>BOOK A VISIT
        </button>
      </motion.div>
      <Carousel>    
        <Carousel.Item>      
          <motion.img 
          variants={carouselImgVariants}
          initial="hidden"
          animate="show" 
          src={gallery8}/>                     
        </Carousel.Item>

        <Carousel.Item>
          <img src={carouselImg}/>   
        </Carousel.Item>

        <Carousel.Item>    
          <img src={gallery7}/>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default CarouselComp