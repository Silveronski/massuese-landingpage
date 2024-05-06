import candle from '../assets/images/candle.png';
import soaps from '../assets/images/soaps.png';
import serum from '../assets/images/serum.png';
import ProductCard from '../cards/ProductCard';
import { motion } from 'framer-motion';
import { staggerChildrenVariants } from '../utils/Variants';
import useResizeWindowListener from '../hooks/useResizeWindowListener';
import content from '../site-content-json/content.json';
const Products = () => {

  const viewportMargin = useResizeWindowListener({mobileMargin: 198, tabletMargin: 65, laptopMargin: 107, desktopMargin: 61});

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

          <ProductCard imgUrl={candle} productName={content.products.firstProduct.name}
            productDescription={content.products.firstProduct.description}/>                            

          <ProductCard imgUrl={soaps} productName={content.products.secondProduct.name}
            productDescription={content.products.secondProduct.description}/>                    
          

          <ProductCard imgUrl={serum} productName={content.products.thirdProduct.name}
            productDescription={content.products.thirdProduct.description}/>                          
                  
        </div>
      </motion.section>
  )
}

export default Products