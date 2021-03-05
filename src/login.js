import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import logoImg from "./images/logo.svg";
import imageFundo from "./images/imageFundo.svg";
import iconLogin from "./images/icon-login.svg";
import { Link } from 'react-router-dom'
import {Formul, Template, Header, Icon, ButtonLogin, LinkFale, LinkRegu, LinkComo, InputCPF, InputSenha} from './styleLogin';

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
          <img src={logoImg} alt="logo-CFA" />
          <nav>
            <LinkFale>
            <Link to="/FaleConosco">Fale Conosco</Link>
            </LinkFale>
            <LinkRegu>
            <Link to="/Regulamento">Regulamento</Link>
            </LinkRegu>
            <LinkComo>
            <Link to="/ComoFunciona">Como Funciona</Link>
            </LinkComo>
          </nav>
        </Header>

        <Icon>
          <img src={iconLogin} alt="IconLogin" />
        </Icon>

        <Formul className={classes.root} noValidate autoComplete="off">
          <InputCPF>
          <TextField id="filled-basic" label="CPF, CNPJ OU CÓDIGO" variant="filled" />
          </InputCPF>
            <br /><br />
          <InputSenha>
          <TextField id="filled-password-input" label="SENHA" type="password" autoComplete="off" variant="filled" />
          </InputSenha>
        </Formul>
      
        <ButtonLogin>
          <Button>ENTRAR</Button>
        </ButtonLogin>
      
        <Template>
          <img src={imageFundo} alt="ImageFundo" />
        </Template>
      </div>
    );
}
export default IndexPag;