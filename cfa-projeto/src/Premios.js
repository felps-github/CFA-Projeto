import React from 'react';
import HeaderApp from './Components/HeaderApp';
import FooterApp from './Components/FooterApp';
import { Button } from '@material-ui/core';

import img45 from './images/45.svg';
import img120 from './images/120.svg';
import img250 from './images/250.svg';

import {DivContainers, DivImg} from './Styles/stylePremios';

class Premios extends React.Component {
    render () {
    return (
        <div>
            <HeaderApp />
            <DivContainers>
                <div>
                    <DivImg>
                        <img src={img45} alt="img45" />
                    </DivImg>
                    <div className="base">
                        <p>R$45,00</p>
                        <small>1.500,00 pontos</small>
                    </div>
                    <Button className="Button">RESGATAR</Button>
                </div>

                <div>
                    <DivImg>
                        <img src={img120} alt="img120" />
                    </DivImg>
                    <div className="base">
                        <p>R$120,00</p>
                        <small>3.000,00 pontos</small>
                    </div>
                    <Button className="Button">RESGATAR</Button>
                </div>

                <div>
                    <DivImg>
                        <img src={img250} alt="img250" />
                    </DivImg>
                    <div className="base">
                        <p>R$250,00</p>
                        <small>5.000,00 pontos</small>
                    </div>
                    <Button className="Button">RESGATAR</Button>
                </div>
                
            </DivContainers>
            <FooterApp />
        </div>
        )
    }
}
export default Premios;