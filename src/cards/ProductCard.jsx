import { motion } from 'framer-motion';
import { productCardsVariants } from '../utils/Variants';

const ProductCard = ({imgUrl, name, description}) => {
  return (
    <motion.div 
        className='my-product'
        variants={productCardsVariants}>
        <img src={imgUrl} alt=""/>
        <div>
            <h5>{name}</h5>
            <p>{description}</p>         
        </div>          
    </motion.div>
  )
}

export default ProductCard