import candle from '../assets/images/candle.png';
import soaps from '../assets/images/soaps.png';
import serum from '../assets/images/serum.png';
import ProductCard from '../cards/ProductCard';
import { motion } from 'framer-motion';
import { staggerChildrenVariants } from '../utils/Variants';
import useResizeWindowListener from '../hooks/useResizeWindowListener';
import useCardCreator from '../hooks/useCardCreator';

const productsArray = useCardCreator(ProductCard, 'products', [candle, soaps, serum]);

const Products = () => {

  const viewportMargin = useResizeWindowListener({mobileMargin: 195, tabletMargin: 65, laptopMargin: 107, desktopMargin: 61});

  return (
    <motion.section
        className='my-products-container'
        variants={staggerChildrenVariants}
        initial="notInView"
        whileInView="inView"
        viewport={{amount: "all", once: true, margin: viewportMargin}}>
        <h4 className='section-headline'><span>My</span> <span>Products</span></h4>
        <div className='my-products-wrapper'>
          <hr/>
          {productsArray}                                    
        </div>
    </motion.section>
  )
}

export default Products