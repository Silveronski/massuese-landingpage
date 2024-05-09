import { motion } from 'framer-motion';
import { treatmentCardsVariants } from '../utils/Variants';

const TreatmentCard = ({imgUrl, name, description}) => {
  return (
    <motion.div 
        className='treatment-card'
        variants={treatmentCardsVariants}>
        <img src={imgUrl} alt="" loading='lazy'/>
        <h4>{name}</h4>
        <p>{description}</p>
    </motion.div>
  )
}

export default TreatmentCard