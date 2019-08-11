import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Muro from './Muro';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={ Login } />
      <Route exact path='/register' component={ Register } />
      <Route exact path='/muro' component={ Muro } />
    </div>
  </BrowserRouter>
);

export default App;
