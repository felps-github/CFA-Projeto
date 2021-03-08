import React from 'react';
import FooterApp from './Components/FooterApp';
import HeaderApp from './Components/HeaderApp';

import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, TextareaAutosize } from '@material-ui/core';

import {Formul, Main} from './Styles/styleFaleConosco';

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch"
        }
    }
}));

function  FaleConosco () {
    const classes = useStyles();
    return (
        <div>
        <HeaderApp />
        <Main>
            <h2>FALE CONOSCO</h2>
                <Formul className={classes.root} noValidate>
                    <TextField id="filled-basic" label="Qual seu nome?" variant="filled" />
                    <TextField id="filled-basic" label="Qual seu telefone?" variant="filled" />
                    <TextField id="filled-basic" label="Qual seu email?" type="email" variant="filled" />
                    <TextField id="filled-basic" label="Sobre o que você quer falar?" variant="filled" />
                    <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Escreva aqui sua mensagem..." />
                    <Button className="Button">ENVIAR</Button>
                </Formul>
        </Main>
        <FooterApp />
        </div>
    )
};

export default FaleConosco;