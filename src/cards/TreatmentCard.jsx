import { motion } from 'framer-motion';
import { treatmentCardsVariants } from '../utils/Variants';

const TreatmentCard = ({ImageUrl, TreatmentName, TreatmentDescreption}) => {
  return (
    <motion.div 
        className='treatment-card'
        variants={treatmentCardsVariants}>
        <img src={ImageUrl} alt=""/>
        <h4>{TreatmentName}</h4>
        <p>{TreatmentDescreption}</p>
    </motion.div>
  )
}

export default TreatmentCard