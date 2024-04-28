import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import one from '../assets/images/one.jpg';
import two from '../assets/images/two.jpg';
import three from '../assets/images/three.jpg';
import { delay, motion } from 'framer-motion';

const infoVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    y: '80%',
    x: '-50%',
  }, 
  show:{
    opacity: 1,
    scale: 1,
    y: '0%', 
    x: '-50%',
    transition: {
      duration: 0.6,
      delay: 1,
      ease: [0, 0.71, 0.2, 1.01]
    }
  }
};

const imgVariants = {
  hidden: {
    opacity: 0, 
  }, 
  show:{
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: [0.8, 0.71, 0.2, 1.01]
    }
  }
}


const CarouselComp = () => {
  return (
    <div className='carousel-container'>

      <motion.div 
        variants={infoVariants}
        initial="hidden"
        animate="show"
        className='info'>
        <h1 >אנה לב</h1>
        <p>מעסה בכירה ורוקחת טבעית בגישה הוליסטית</p>
        <button         
         onClick={() => window.open("https://wa.me/972547933887", "_blank")}>קבע/י תור
        </button>
      </motion.div>

      <Carousel>     
        <Carousel.Item>
            <motion.img 
            variants={imgVariants}
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