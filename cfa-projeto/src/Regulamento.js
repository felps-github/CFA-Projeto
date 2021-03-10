import React from 'react';
import HeaderApp from './Components/HeaderApp';
import FooterApp from './Components/FooterApp';

import iconWall from './images/wall.svg'
import iconSpatula from './images/spatula.svg'
import iconBrick from './images/brickwork.svg'
import iconEngi from './images/engineer.svg'
import iconWorker from './images/worker.svg'

import {Main, DivImgs, DivJobs} from './Styles/styleRegulamento';

class Regulamento extends React.Component {
    render () {
    return (
        <div>
        <HeaderApp />
        <Main>
            <h2>O Programa</h2>
            <hr></hr>

            <p>A Normatel Home Center apresenta uma grande novidade: o CLUBE FAZ ACONTECER, além de alavancar a qualidade de serviços no mercado da construção civil, reconhece e incetiva o profissional autônomo através de diversos benefícios.</p>

            <h2>Podem participar</h2>
            <hr></hr>

            <DivJobs>
                <p>Bombeiros Hidraúlicos</p>
                <p>Eletricistas</p>
                <p>Pedreiros</p>
                <p>Pintores</p>
                <p>Faz tudo</p>
            </DivJobs>

            <DivImgs>
                
                <img src={iconWall} alt="Wall" />
                <img src={iconEngi} alt="Engineer" />
                <img src={iconBrick} alt="Brickwork" />
                <img src={iconSpatula} alt="Spatula" />
                <img src={iconWorker} alt="Worker" />
                
            </DivImgs>

            <h2>Como Funciona</h2>
            <hr></hr>
            
        </Main>
        <FooterApp />
        </div>
        )
    }
}
export default Regulamento;