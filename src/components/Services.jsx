import pregnant from '../assets/images/pregnant.png';
import home from '../assets/images/home.png';
import running from '../assets/images/running.png';
import ServiceCard from '../cards/ServiceCard';
import { motion } from 'framer-motion';
import { downToUpVariants } from '../utils/Variants';
import useResizeWindowListener from '../hooks/useResizeWindowListener';
import useCardCreator from '../hooks/useCardCreator';

const servicesArray = useCardCreator(ServiceCard, 'services', [pregnant, home, running]);

const Services = () => {
  
  const viewportMargin = useResizeWindowListener({mobileMargin: 134, tabletMargin: 27, laptopMargin: 42, desktopMargin: 22});

  return (
    <motion.section
        className='services-container'
        variants={downToUpVariants}
        initial="notInView"
        whileInView="inView"
        viewport={{amount: "all", once: true, margin: viewportMargin}}>
        <h3 className='section-headline'><span>Other</span> <span>Services</span></h3>
        <hr/>
        <div className='services-wrapper'>        
          {servicesArray}
        </div>
      </motion.section>
  )
}

export default Services