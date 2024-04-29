import candle from '../assets/images/candle.png';
import soaps from '../assets/images/soaps.png';
import serum from '../assets/images/serum.png';
import ProductCard from '../cards/ProductCard';
import { motion } from 'framer-motion';
import { downToUpVariants } from '../utils/Variants';

const Products = () => {
  return (
    <motion.section
        className='my-products-container'
        variants={downToUpVariants}
        initial="notInView"
        whileInView="inView"
        viewport={{amount: "all", margin: "550px", once: true}}>
        <h4><span>המוצרים</span> <span>שלי</span></h4>
        <div className='my-products-wrapper'>
          <hr/>

          <ProductCard imgUrl={candle} productName="נרות בעבודת יד"
            productDescription="מערבבת, מכניסה כוונה, מוזגת, אחד, אחד
              חומרי הגלם הם הכי איכותיים וידידותיים
              אשתף בהמשך
              על החומרים
              עבורי להכין אותם זה נחת
              מקווה שהם יכניסו לכל בית וחדר שיגיעו אליו
              את האנרגיה הזו שאני מביאה בקליניקה
              של נוכחות, משאלת הלב לאור ושל מרחב בטוח לגוף ולנפש."            
          />

          <ProductCard imgUrl={soaps} productName="סבונים טבעיים בעבודת יד"
            productDescription="סבונים מוצקים טבעיים בעבודת יד
              ממש כמו של פעם...
              הסבונים אקולוגיים ועשויים משמנים וחמאות טבעיות, 
              הצבעים מתקבלים מחימרים, תבלינים, אבקות צמחיות מיקות ואוקסידים,
              הניחוחות מתקבלים משמנים ארומטיים איכותיים.
              הסבונים הטבעיים מטיבים עם העור שלנו, שומרים על שכבת השומן הטבעית שלו, 
              , אקולוגיים, נעימים כל כך ומקציפים מצויין
              הניחוחות שלהם אצלי מגיעים מעולם הארומתרפיה."                     
          />

          <ProductCard imgUrl={serum} productName="בקבוקוני רסקיו פרחי באך"
            productDescription="תמציות פרחי באך מותרות לשימוש מגיל 0 עד 120
              הרסקיו היא פורמולה שיעילה להרגעה 
              ברגע של מצבים שמכניסים אותנו לטראומה קשה, חדשות קשות מנשוא, 
              פחד עז, הלם, היסטריה, פאניקה, חרדה קיצונית, מתח גדול בשל
              מצב או חוויה טראומית וחדשות רעות, אובדן גדול ואבל קשה מנשוא."                         
          />         

        </div>
      </motion.section>
  )
}

export default Products