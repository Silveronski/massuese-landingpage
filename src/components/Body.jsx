import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import one from '../assets/images/one.jpg';
import two from '../assets/images/two.jpg';
import three from '../assets/images/three.jpg';
import closeUp from '../assets/images/closeUp.png';

const Body = () => {
  return (
    <main className='site-container'>    
      <Carousel>
          <Carousel.Item>
              <img src={one}/>           
              <Carousel.Caption>
                <h1>אנה לב</h1>
                <p>עיסוי שוודי הוליסטי | ארומתרפיה</p>
                <button>קבע/י תור</button>
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
              <img src={two}/>   
              <Carousel.Caption>
                <h1>אנה לב</h1>
                <p>עיסוי רקמות עמוק | עיסוי פנים יפני קובידו</p>
                <button>קבע/י תור</button>
              </Carousel.Caption>     
          </Carousel.Item>

          <Carousel.Item>     
              <img src={three}/>    
              <Carousel.Caption>
                <h1>אנה לב</h1>
                <p>פרחי באך | רוקחות טבעית</p>
                <button>קבע/י תור</button>
              </Carousel.Caption>     
          </Carousel.Item>
      </Carousel>

      <section className='aboutMe-container'>
        <div className='aboutMe-wrapper'>
          <h2><span>קצת</span> <span>עליי</span></h2>
          <hr/>
          <div className='content'>
            <img src={closeUp} alt=""/>
            <p>הגעתי לעולם הקוסמטיקה בגיל מאוד צעיר בערך בשנות ה20... , אהבתי טיפוח וכל דבר שהיה אפשר להוסיף לעולם היופי. בגיל ההתבגרות סבלתי מאקנה קשה בכל הגוף, מה שלא עשיתי ואיפה שלא הלכתי שום דבר לא עזר. בדרך נולדה לי ילדה והפגמנטציה לא אחרה להגיע ואמרת סטופ... פה אני כבר התחלתי לחקור איך אני יכולה לעזור לעצמי בלי התערבות של רופאי עור שגם ככה לא עזרו. באותו זמן התחלתי את לימודי הקוסמטיקה שלי, הייתי שכירה כ 5 שנים וצברתי נסיון וידע רב. היום אני בעלת עסק פרטי בחדרה ורוצה לעזור לכל אחת או אחד שנתקל בבעיה.</p>
          </div>
        </div>
      </section>

      <section className='treatments-container'>
        <div className='treatments-wrapper'>
          <h3>סוגי טיפולים</h3>
        </div>
      </section>   
    </main>
  )
}

export default Body