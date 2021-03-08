import React from "react";
import { Link } from 'react-router-dom'

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';

import logoImg from "./images/logo.svg";
import imageFundo from "./images/imageFundo.svg";
import iconLogin from "./images/icon-login.svg";

import {Formul, Header, Main} from './Styles/styleLogin';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

const IndexPag = () => {
  const classes = useStyles();
  return (
    <div>
      <Header>
        <Link className="LinkImgLogo" to="/"><img src={logoImg} alt="logo-CFA" /></Link>
        <nav>
          <Link className="LinkFale" to="/FaleConosco">Fale Conosco</Link>
          <Link className="LinkRegu"  to="/Regulamento">Regulamento</Link>
          <Link className="LinkComo" to="/ComoFunciona">Como Funciona</Link>
        </nav>
      </Header>

      <Main>
        <Formul className={classes.root} noValidate autoComplete="off">
          <img src={iconLogin} alt="IconLogin" />
          <TextField id="filled-basic" label="CPF, CNPJ OU CÓDIGO" variant="filled" />
          <TextField id="filled-password-input" label="SENHA" type="password" variant="filled"/>
          <Button className="Button">ENTRAR</Button>
        </Formul>
        <img className="ImageFundo" src={imageFundo} alt="ImageFundo" />
      </Main>
    </div>
  );
}

export default IndexPag;
