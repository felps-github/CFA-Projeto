import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import FaleConosco from './FaleConosco'
import Regulamento from './Regulamento'
import ComoFunciona from './ComoFunciona'
import Premios from './Premios'
import Login from './login';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
   <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/login" component={Login} />
      <Route path="/FaleConosco" component={FaleConosco} />
      <Route path="/ComoFunciona" component={ComoFunciona} />
      <Route path="/Regulamento" component={Regulamento} />
      <Route path="/Premios" component={Premios} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);