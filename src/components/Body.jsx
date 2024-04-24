import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import closeUp from '../assets/images/closeUp.png';
import sweden from '../assets/images/sweden.png';
import oils from '../assets/images/oils.png';
import face from '../assets/images/face.png';
import rekamot from '../assets/images/rekamot.png';
import candle from '../assets/images/candle.png';
import soaps from '../assets/images/soaps.png';
import serum from '../assets/images/serum.png';
import CarouselComp from './CarouselComp';
import TreatmentCard from './TreatmentCard';
import ProductCard from './ProductCard';

const Body = () => {
  return (
    <main> 

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

      <section className='my-products-container'>
        <h4>המוצרים שלי</h4>
        <div className="my-products-wrapper">
          <hr/>

          <div className='my-product'>
            <img src={candle} alt="" />
            <div>
              <h5>נרות בעבודת יד</h5>
              <p>מערבבת, מכניסה כוונה, מוזגת, אחד, אחד
                חומרי הגלם הם הכי איכותיים וידידותיים
                אשתף בהמשך
                על החומרים
                עבורי להכין אותם זה נחת
                מקווה שהם יכניסו לכל בית וחדר שיגיעו אליו
                את האנרגיה הזו שאני מביאה בקליניקה
                של נוכחות, משאלת הלב לאור ושל מרחב בטוח לגוף ולנפש.
              </p>
            </div>          
          </div>

          <div className='my-product'>
            <div>
              <h5>סבונים טבעיים בעבודת יד</h5>
              <p>סבונים מוצקים טבעיים בעבודת יד
                ממש כמו של פעם...
                הסבונים אקולוגיים ועשויים משמנים וחמאות טבעיות, 
                הצבעים מתקבלים מחימרים, תבלינים, אבקות צמחיות מיקות ואוקסידים,
                הניחוחות מתקבלים משמנים ארומטיים איכותיים.
                הסבונים הטבעיים מטיבים עם העור שלנו, שומרים על שכבת השומן הטבעית שלו, 
                , אקולוגיים, נעימים כל כך ומקציפים מצויין
                הניחוחות שלהם אצלי מגיעים מעולם הארומתרפיה. 
              </p>
            </div>
            <img src={soaps} alt="" />
          </div>

          <div className='my-product'>
            <img src={serum} alt="" />
            <div>
              <h5>בקבוקוני רסקיו פרחי באך</h5>
              <p>
                תמציות פרחי באך מותרות לשימוש מגיל 0 עד 120
                הרסקיו היא פורמולה שיעילה להרגעה 
                ברגע של מצבים שמכניסים אותנו לטראומה קשה, חדשות קשות מנשוא, 
                פחד עז, הלם, היסטריה, פאניקה, חרדה קיצונית, מתח גדול בשל
                מצב או חוויה טראומית וחדשות רעות, אובדן גדול ואבל קשה מנשוא.
              </p>
            </div>          
          </div>

        </div>
      </section>

    </main>
  )
}

export default Body