import pregnant from '../assets/images/pregnant.png';
import home from '../assets/images/home.png';
import running from '../assets/images/running.png';
import ServiceCard from '../cards/ServiceCard';
import { motion } from 'framer-motion';
import { downToUpVariants } from '../utils/Variants';
import useResizeWindowListener from '../hooks/useResizeWindowListener';

const Services = () => {
  
  const viewportMargin = useResizeWindowListener({mobileMargin: 120, tabletMargin: 27, laptopMargin: 42, desktopMargin: 22});

  return (
    <motion.section
        className='services-container'
        variants={downToUpVariants}
        initial="notInView"
        whileInView="inView"
        viewport={{amount: "all", once: true, margin: viewportMargin}}>
        <h3><span>שירותים</span> <span>נוספים</span></h3>
        <hr/>

        <div className='services-wrapper'>        
          <ServiceCard imgUrl={pregnant} serviceName="עיסוי לנשים בהריון"
            serviceDescription="יטת ריפוי קלאסית להשפעה חיוביות על כל מערכות הגוף,
            הרפיה ושחרור שרירים, שיפור זרימת הדם
            שחרור כאבי ראש, האצת חילוף החומרים בגוף, הפגת מתחים והרגעה."/>
          

          <ServiceCard imgUrl={home} serviceName="הגעה עד הבית"
            serviceDescription="יטת ריפוי קלאסית להשפעה חיוביות על כל מערכות הגוף,
            הרפיה ושחרור שרירים, שיפור זרימת הדם
            שחרור כאבי ראש, האצת חילוף החומרים בגוף, הפגת מתחים והרגעה."/>
          
          
          <ServiceCard imgUrl={running} serviceName="עיסוי לספורטאים"
            serviceDescription="יטת ריפוי קלאסית להשפעה חיוביות על כל מערכות הגוף,
            הרפיה ושחרור שרירים, שיפור זרימת הדם
            שחרור כאבי ראש, האצת חילוף החומרים בגוף, הפגת מתחים והרגעה."
          />
        </div>
      </motion.section>
  )
}

export default Services