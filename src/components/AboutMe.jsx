import closeUp from '../assets/images/closeUp.png';
import { motion } from 'framer-motion';
import { downToUpVariants } from '../utils/Variants';

const AboutMe = () => {
  return (
    <section className='aboutMe-container'>                   
        <motion.div
          className='aboutMe-wrapper'
          variants={downToUpVariants}
          initial="notInView"
          whileInView="inView"
          viewport={{amount: "all", once: true, margin: "13%"}}>         
          <h2><span>קצת</span> <span>עליי</span></h2>
          <hr/>
          <div className='content'>
            <img src={closeUp} alt=""/>
            <p>הגעתי לעולם הקוסמטיקה בגיל מאוד צעיר בערך בשנות ה20... , 
              אהבתי טיפוח וכל דבר שהיה אפשר להוסיף לעולם היופי. 
              בגיל ההתבגרות סבלתי מאקנה קשה בכל הגוף, 
              מה שלא עשיתי ואיפה שלא הלכתי שום דבר לא עזר. 
              בדרך נולדה לי ילדה והפגמנטציה לא אחרה להגיע ואמרת סטופ... פה 
              אני כבר התחלתי לחקור איך אני יכולה לעזור לעצמי בלי התערבות של 
              רופאי עור שגם ככה לא עזרו. באותו זמן התחלתי את לימודי 
              הקוסמטיקה שלי, הייתי שכירה כ 5 שנים וצברתי נסיון וידע רב. היום אני 
              בעלת עסק פרטי בחדרה ורוצה לעזור לכל אחת או אחד שנתקל בבעיה.</p>
          </div>
        </motion.div>
      </section>
  )
}

export default AboutMe