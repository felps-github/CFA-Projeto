import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import FirstImage from './images/carousel1.jpg';
import SecondImage from './images/carousel2.jpg';
import Normatel from './images/Normatel.svg';
import Iconlocal from './images/local.svg';
import IconInsta from './images/insta.svg';
import IconFace from './images/face.svg';
import IconTel from './images/tel.svg';

import { Div, DivMain, DivCopy } from './style';
function App() {
  return (
  <div>
    <Div>
        <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={FirstImage} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>Primeiro slide</h3>
            <p>Este é o primeiro slide, pô.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={SecondImage} alt="Second slide" />
          <Carousel.Caption>
            {/* <h3>Segundo slide</h3>
            <p>Este é o segundo slide, pô.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <footer>
        <DivMain>
          <img src={Normatel} alt="logo do footer da Normatel"/>
          <div className='divLocal'>
            <img src={Iconlocal} alt='Icon Localização' />
            <p>Avenida Antônio Sales, 3410, Fortaleza, CE </p>
          </div>
          <div className='divInsta'>
            <img src={IconInsta} alt='Icon Instagram' />
            <p>Instagram</p>
          </div>
          <div className='divFace'>
              <img src={IconFace} alt='Icon Facebook' />
              <p>Facebook</p>
          </div>
          <div className='divTel'>
              <img src={IconTel} alt='Icon Telefone' />
              <p>Telefone: (85) 98114-7499  <br /> Email: clubefazacontecer@normatel.com.br</p>
          </div>
        </DivMain>
        <DivCopy>
          <div>Desenvolvido por Norma Labs ® 2021
               Todos os direitos reservados.</div>
        </DivCopy>
      </footer>
    </Div>
  </div>
  );
}

export default App