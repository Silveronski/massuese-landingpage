import closeUp from '../assets/images/closeUp.jpeg';
import { motion } from 'framer-motion';
import { downToUpVariants } from '../utils/Variants';
import useResizeWindowListener from '../hooks/useResizeWindowListener';
import content from '../site-content-json/content.json';

const AboutMe = () => {

  const viewportMargin = useResizeWindowListener({mobileMargin: 90, tabletMargin: 13, laptopMargin: 30, desktopMargin: 13});

  return (
    <section className='aboutMe-container'>                   
        <motion.div
          className='aboutMe-wrapper'
          variants={downToUpVariants}
          initial="notInView"
          whileInView="inView"
          viewport={{amount: "all", once: true, margin: viewportMargin}}>         
          <h2 className='section-headline'><span>About</span> <span>Me</span></h2> 
          <hr/>
          <div className='content'>
            <p>{content.aboutMe.paragraph}</p>
            <img src={closeUp} alt=""/>
          </div>
        </motion.div>
      </section>
  )
}

export default AboutMe