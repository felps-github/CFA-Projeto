import React from 'react';
import { Carousel } from 'react-bootstrap';
import FirstImage from './images/carousel1.jpg';
import SecondImage from './images/carousel2.jpg';

import HeaderApp from './Components/HeaderApp';
import FooterApp from './Components/FooterApp';

import {Div} from './Styles/styleApp';


function App() {
  return (
    <Div>
      <HeaderApp />
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={FirstImage} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>Primeiro slide</h3>
            <p>Este é o primeiro slide, pô.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img className="d-block w-100" src={SecondImage} alt="Second slide" />
          <Carousel.Caption>
            {/* <h3>Segundo slide</h3>
            <p>Este é o segundo slide, pô.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <FooterApp />
    </Div>
  );
}

export default App;