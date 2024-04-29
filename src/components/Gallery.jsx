import { motion } from 'framer-motion';
import { downToUpVariants } from '../utils/variants';
import { ImgUrls } from '../utils/galleryImgUrls';

const Gallery = () => {
    return (
        <motion.section
            className='gallery-container'
            variants={downToUpVariants}
            initial="notInView"
            whileInView="inView"
            viewport={{amount: "some", once: true, margin: window.innerWidth > 480 ? "-20%" : "0%"}}>
            <div className='gallery-wrapper'>
            {[...Array(9)].map((_, index) => (
                <img key={index} src={ImgUrls[index]} alt=""/>
            ))}
            </div>
        </motion.section>
    )
}
export default Gallery