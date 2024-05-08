import sweden from '../assets/images/sweden.png';
import oils from '../assets/images/oils.png';
import face from '../assets/images/face.png';
import rekamot from '../assets/images/rekamot.png';
import TreatmentCard from '../cards/TreatmentCard';
import { motion } from 'framer-motion';
import { staggerChildrenVariants } from '../utils/Variants';
import useResizeWindowListener from '../hooks/useResizeWindowListener';
import useCardCreator from '../hooks/useCardCreator';

const treatmentsArray = useCardCreator(TreatmentCard, 'treatments', [sweden, rekamot, oils, face]);

const Treatments = () => {

  const viewportMargin = useResizeWindowListener({mobileMargin: 175, tabletMargin: 45, laptopMargin: 73, desktopMargin: 22});

  return (
    <motion.section 
        className='treatments-container'
        variants={staggerChildrenVariants}
        initial="notInView"
        whileInView="inView"
        viewport={{amount: "all", once: true, margin: viewportMargin}}>
        <h3 className='section-headline'><span>Treatment</span> <span>Types</span></h3>
        <div className='treatments-wrapper'>          
          <hr />
          {treatmentsArray}
        </div>
      </motion.section> 
  )
}

export default Treatments