import { motion } from 'framer-motion';
import { downToUpVariants } from '../utils/Variants';
import { ImgUrls } from '../utils/GalleryImgUrls';

const Gallery = () => {
  return (
    <motion.section
    className='gallery-container'
    variants={downToUpVariants}
    initial="notInView"
    whileInView="inView"
    viewport={{amount: "all", once: true, margin: window.innerWidth > 480 ? "250px" : "0px"}}>
    <div className='gallery-wrapper'>
      {[...Array(9)].map((_, index) => (
        <img key={index} src={ImgUrls[index]} alt=""/>
      ))}
    </div>
  </motion.section>
  )
}

export default Gallery