import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from "./images/logo.svg";
import iconHome from './images/icon-home.svg';
import logoNorma from './images/Normatel.svg';

import {Header} from './styleApp';
import {LinkRegula, LinkFaleCon, LinkPremios, Div, DivLogo, DivHeader, Footer, Nav} from './styleApp';

function Home () {
  return (
    <div>
      <Header>
        <DivHeader>
          <DivLogo>
            <img className="logo" src={logoImg} alt="logo-CFA" />
          </DivLogo>
          <Div>
            <img className="icon" src={iconHome} alt="icon-home" />
            <Link to="/login"><b>Login</b></Link>
          </Div>
        </DivHeader>
        <nav>
          <LinkPremios>
            <Link to="/Premios">Prêmios</Link>
          </LinkPremios>
          <LinkRegula>
            <Link to="/Regulamento">Regulamento</Link>
          </LinkRegula>
          <LinkFaleCon>
            <Link to="/FaleConosco">Fale Conosco</Link>
          </LinkFaleCon>
        </nav>
      </Header>

      <main>
        Conteúdo (Carrossel)
      </main>

      <Footer>
        <img src={logoNorma} alt="Footer - Normatel" />
      </Footer>
      <Nav>
          <div>
          Desenvolvido por Norma Labs ® 2021
          Todos os direitos reservados.
          </div>
        </Nav>
  </div>

  )
}

export default Home