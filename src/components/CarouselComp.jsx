import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import one from '../assets/images/one.jpg';
import two from '../assets/images/two.jpg';
import three from '../assets/images/three.jpg';

const CarouselComp = () => {
  return (
    <div className='carousel-container'>

      <div className='info'>
        <h1>אנה לב</h1>
        <p>מעסה בכירה ורוקחת טבעית בגישה הוליסטית</p>
        <button onClick={() => window.open("https://wa.me/972547933887", "_blank")}>קבע/י תור</button>
      </div>

      <Carousel>     
        <Carousel.Item>
            <img src={one}/>                     
        </Carousel.Item>

        <Carousel.Item>
            <img src={two}/>   
        </Carousel.Item>

        <Carousel.Item>     
            <img src={three}/>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default CarouselComp