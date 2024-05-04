import sweden from '../assets/images/sweden.png';
import oils from '../assets/images/oils.png';
import face from '../assets/images/face.png';
import rekamot from '../assets/images/rekamot.png';
import TreatmentCard from '../cards/TreatmentCard';
import { motion } from 'framer-motion';
import { staggerChildrenVariants } from '../utils/Variants';
import useResizeWindowListener from '../hooks/useResizeWindowListener';

const Treatments = () => {

  const viewportMargin = useResizeWindowListener({mobileMargin: 155, tabletMargin: 45, laptopMargin: 71.5, desktopMargin: 22});

  return (
    <motion.section 
        className='treatments-container'
        variants={staggerChildrenVariants}
        initial="notInView"
        whileInView="inView"
        viewport={{amount: "all", once: true, margin: viewportMargin}}>
        <h3><span>סוגי</span> <span>טיפולים</span></h3>
        <div className='treatments-wrapper'>          
          <hr />
          <TreatmentCard ImageUrl={sweden} TreatmentName="עיסוי שוודי הוליסטי" 
            TreatmentDescreption="שיטת ריפוי קלאסית להשפעה חיוביות על כל מערכות הגוף,
            הרפיה ושחרור שרירים, שיפור זרימת הדם
            , שחרור כאבי ראש, האצת חילוף החומרים בגוף, הפגת מתחים והרגעה."
          />
            
          <TreatmentCard ImageUrl={rekamot} TreatmentName="עיסוי רקמות עמוק ושיקום" 
            TreatmentDescreption="טיפול בעיסוי רקמות עמוק לכאבים כרוניים עקב התכווצות שרירים,
            פציעה פיזית, טווחי תנועה מופחתים או לכידה עצבית. מתאים גם לספורטאים."       
          />

          <TreatmentCard ImageUrl={oils} TreatmentName="עיסוי ארומתרפי" 
            TreatmentDescreption="עיסוי ארומתרפי מלא בחיוניות והרגעה בהתאמה אישית. זהו עיסוי שטחי ועדין,
            משולב בשמנים ארומטים לטיפול בגוף ובנפש. בהרחה ובמריחה בהתאמה אישית לכל אחד ואחת."                   
          />

          <TreatmentCard ImageUrl={face} TreatmentName="עיסוי פנים יפני קובידו" 
            TreatmentDescreption="הפנים הם המראה לכל הגוף שלנו, עיסוי זה מביא להרפיה נהדרת של מערכת העצבים, הפגת מתחים עמוקה, 
            אפקט מתיחה פנים טבעי, מניעת היווצרות קמטים חדשים, 
            מרגיע מתח שרירי בפנים ובצוואר, גירוי למפתי ומשפיע על איזון האנרגיה בכל הגוף."                            
          />

        </div>
      </motion.section> 
  )
}

export default Treatments