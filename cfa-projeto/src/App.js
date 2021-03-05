import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import FirstImage from './images/carousel1.jpg';
import SecondImage from './images/carousel2.jpg';
import Normatel from './images/Normatel.svg';
import logoImg from "./images/logo.svg";
import iconHome from './images/icon-home.svg';
import Iconlocal from './images/local.svg';
import IconInsta from './images/insta.svg';
import IconFace from './images/face.svg';
import IconTel from './images/tel.svg';

import {Div, DivMain, DivTudo, DivCopy, DivLogin, DivLogo, Header } from './styleApp';
function App() {
  return (
    <Div>
      <Header>
        <DivTudo>
        <DivLogo>
          <img className="logo" src={logoImg} alt="logo-CFA" />
        </DivLogo>

        <DivLogin>
          <img className="icon" src={iconHome} alt="icon-home" />
          <Link className='linkLogin' to="/login"><b>Login</b></Link>
        </DivLogin>
        </DivTudo>

        <nav>
          <Link className='LinkPremios' to="/Premios">Prêmios</Link>
          <Link className='LinkRegula' to="/Regulamento">Regulamento</Link>
          <Link className='LinkFaleCon' to="/FaleConosco">Fale Conosco</Link>
        </nav>

      </Header>
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
  );
}

export default App
