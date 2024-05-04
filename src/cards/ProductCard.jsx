import { motion } from 'framer-motion';
import { productCardsVariants } from '../utils/Variants';

const ProductCard = ({imgUrl, productName, productDescription}) => {
  return (
    <motion.div 
        className='my-product'
        variants={productCardsVariants}>
        <img src={imgUrl} alt=""/>
        <div>
            <h5>{productName}</h5>
            <p>{productDescription}</p>         
        </div>          
    </motion.div>
  )
}

export default ProductCard