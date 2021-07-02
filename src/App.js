import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlanetaProvider from './providers/PlanetaProvider';

import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <PlanetaProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={ Home } />

          </Switch>
          <div>
            <h1>Sistema Solar</h1>
          </div>
        </BrowserRouter>
      </PlanetaProvider>
    );
  }
}

export default App;
