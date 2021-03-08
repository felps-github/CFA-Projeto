import React from 'react';

import { DivFooter, DivCopy } from '../Styles/styleApp';
import Normatel from '../images/Normatel.svg';
import Iconlocal from '../images/local.svg';
import IconInsta from '../images/insta.svg';
import IconFace from '../images/face.svg';
import IconTel from '../images/tel.svg';

const FooterApp = () => {
    return (
        <footer>
            <DivFooter>
                <img src={Normatel} alt="logo do footer da Normatel" />
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
            </DivFooter>
            <DivCopy>
                <div>Desenvolvido por Norma Labs ® 2021
         Todos os direitos reservados.</div>
            </DivCopy>
        </footer>
    )
};

export default FooterApp;