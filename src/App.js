import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Table from './Components/table';
import StarWarsProvider from './Context/StarWarsProvider';

function App() {
  return (
    <div>
      <StarWarsProvider>
        <Switch>
          <Route exact path="/" component={ Table } />
        </Switch>
      </StarWarsProvider>
    </div>
  );
}

export default App;
