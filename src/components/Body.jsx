import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import closeUp from '../assets/images/closeUp.png';
import sweden from '../assets/images/sweden.png';
import oils from '../assets/images/oils.png';
import face from '../assets/images/face.png';
import rekamot from '../assets/images/rekamot.png';
import CarouselComp from './CarouselComp';
import TreatmentCard from './TreatmentCard';

const Body = () => {
  return (
    <main className='site-container'> 

      <CarouselComp/>
      
      <section className='aboutMe-container'>
        <div className='aboutMe-wrapper'>
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
        </div>
      </section>

      <section className='treatments-container'>
        <h3>סוגי טיפולי מגע</h3>
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
      </section>   
    </main>
  )
}

export default Body