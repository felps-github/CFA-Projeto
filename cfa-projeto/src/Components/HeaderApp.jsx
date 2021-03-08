import React from 'react';
import {Header, DivTudo, DivLogo, DivLogin} from '../Styles/styleApp'
import { Link } from 'react-router-dom';
import logoImg from "../images/logo.svg";
import iconHome from '../images/icon-home.svg';

const HeaderApp = () => {
    return (
        <Header>
            <DivTudo>
                <DivLogo>
                    <Link to="/" className="LinkImgLogo"><img className="logo" src={logoImg} alt="logo-CFA" /></Link>
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
    )
};

export default HeaderApp;