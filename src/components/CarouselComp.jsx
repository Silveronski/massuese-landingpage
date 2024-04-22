import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import one from '../assets/images/one.jpg';
import two from '../assets/images/two.jpg';
import three from '../assets/images/three.jpg';

const CarouselComp = () => {

  const handleClick = () => {
    window.open("https://wa.me/972547933887", "_blank");
  }

  return (
    <Carousel>
          <Carousel.Item>
              <img src={one}/>           
              <Carousel.Caption>
                <h1>אנה לב</h1>
                <p>מעסה בכירה ורוקחת טבעית בגישה הוליסטית</p>
                <button onClick={handleClick}>קבע/י תור</button>
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
              <img src={two}/>   
              <Carousel.Caption>
                <h1>אנה לב</h1>
                <p>מעסה בכירה ורוקחת טבעית בגישה הוליסטית</p>
                <button onClick={handleClick}>קבע/י תור</button>
              </Carousel.Caption>     
          </Carousel.Item>

          <Carousel.Item>     
              <img src={three}/>    
              <Carousel.Caption>
                <h1>אנה לב</h1>
                <p>מעסה בכירה ורוקחת טבעית בגישה הוליסטית</p>
                <button onClick={handleClick}>קבע/י תור</button>
              </Carousel.Caption>     
          </Carousel.Item>
      </Carousel>
  )
}

export default CarouselComp