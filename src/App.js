import React from 'react';
import './App.css';
import ListPlanets from './components/ListPlanets';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <ListPlanets />
    </Provider>
  );
}

export default App;
