import Carousel from 'react-bootstrap/Carousel';
import one from '../assets/images/one.jpg';
import two from '../assets/images/two.jpg';
import three from '../assets/images/three.jpg';
import Logo from '../assets/images/Logo.png';
import { motion } from 'framer-motion';
import { carouselImgVariants, carouselInfoVariants } from '../utils/Variants';

const CarouselComp = () => {
  return (
    <div className='carousel-container'>

      <motion.div 
        variants={carouselInfoVariants}
        initial="hidden"
        animate="show"
        className='info'>
        <img src={Logo} alt="" />
        <h1 >אנה לב</h1>
        <p>מעסה בכירה ורוקחת טבעית בגישה הוליסטית</p>
        <button         
         onClick={() => window.open("https://wa.me/972547933887", "_blank")}>קבע/י תור
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