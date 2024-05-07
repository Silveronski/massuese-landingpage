import pregnant from '../assets/images/pregnant.png';
import home from '../assets/images/home.png';
import running from '../assets/images/running.png';
import ServiceCard from '../cards/ServiceCard';
import { motion } from 'framer-motion';
import { downToUpVariants } from '../utils/Variants';
import useResizeWindowListener from '../hooks/useResizeWindowListener';
import content from '../site-content-json/content.json';

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
          <ServiceCard imgUrl={pregnant} serviceName={content.services.firstService.name}
           serviceDescription={content.services.firstService.description}/>
          

          <ServiceCard imgUrl={home} serviceName={content.services.secondService.name}
           serviceDescription={content.services.secondService.description}/>
          
          
          <ServiceCard imgUrl={running} serviceName={content.services.thirdService.name}
            serviceDescription={content.services.thirdService.description}
          />
        </div>
      </motion.section>
  )
}

export default Services