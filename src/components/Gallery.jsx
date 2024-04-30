import { motion } from 'framer-motion';
import { downToUpVariants } from '../utils/Variants';
import { ImgUrls } from '../utils/GalleryImgUrls';
import useResizeWindowListener from '../hooks/useResizeWindowListener';

const Gallery = () => {

    const viewportMargin = useResizeWindowListener({mobileMargin: 0, tabletMargin: -2, laptopMargin: -9, desktopMargin: -20});
    
    return (
        <motion.section
            className='gallery-container'
            variants={downToUpVariants}
            initial="notInView"
            whileInView="inView"
            viewport={{amount: "some", once: true, margin: viewportMargin}}>
            <div className='gallery-wrapper'>
            {[...Array(9)].map((_, index) => (
                <img key={index} src={ImgUrls[index]} alt=""/>
            ))}
            </div>
        </motion.section>
    )
}
export default Gallery