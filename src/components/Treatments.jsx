import sweden from '../assets/images/sweden.png';
import oils from '../assets/images/oils.png';
import face from '../assets/images/face.png';
import rekamot from '../assets/images/rekamot.png';
import TreatmentCard from '../cards/TreatmentCard';
import { motion } from 'framer-motion';
import { staggerChildrenVariants } from '../utils/Variants';
import useResizeWindowListener from '../hooks/useResizeWindowListener';
import content from '../site-content-json/content.json';

const Treatments = () => {

  const viewportMargin = useResizeWindowListener({mobileMargin: 155, tabletMargin: 45, laptopMargin: 71.5, desktopMargin: 22});

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

          <TreatmentCard ImageUrl={sweden} TreatmentName={content.treatments.firstTreatment.name}
            TreatmentDescreption={content.treatments.firstTreatment.description}
          />
            
          <TreatmentCard ImageUrl={rekamot} TreatmentName={content.treatments.secondTreatment.name}
           TreatmentDescreption={content.treatments.secondTreatment.description}      
          />

          <TreatmentCard ImageUrl={oils} TreatmentName={content.treatments.thirdTreatment.name}
            TreatmentDescreption={content.treatments.thirdTreatment.description}                  
          />

          <TreatmentCard ImageUrl={face} TreatmentName={content.treatments.forthTreatment.name}
           TreatmentDescreption={content.treatments.forthTreatment.description}                    
          />

        </div>
      </motion.section> 
  )
}

export default Treatments