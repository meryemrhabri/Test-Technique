import React from 'react';
import ReactDOM from 'react-dom';
import app from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={app}/>
    </Switch>
  </main>
)


ReactDOM.render((
  <BrowserRouter>
    <Main />
  </BrowserRouter>
), document.getElementById('root'))
//registerServiceWorker();
