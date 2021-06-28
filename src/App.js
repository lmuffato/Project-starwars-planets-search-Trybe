import React from 'react';
import './App.css';
import ListaPlanets from './components/ListaPlanets';
import Provider from './storeContext/Provider';

function App() {
  return (
    <Provider>
      <h1>Star Wars Planets</h1>
      <ListaPlanets />
    </Provider>
  );
}

export default App;
