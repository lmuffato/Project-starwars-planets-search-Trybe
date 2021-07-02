import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlanetaProvider from './providers/PlanetaProvider';

import Home from './pages/Home';

function App() {
  return (
    <PlanetaProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={ Home } />
        </Switch>
      </BrowserRouter>
    </PlanetaProvider>
  );
}

export default App;
