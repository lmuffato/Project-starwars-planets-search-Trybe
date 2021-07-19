import React from 'react';
import './App.css';
import TableOfPlanets from './Components/TableOfPlanets';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <TableOfPlanets />
    </Provider>
  );
}

export default App;
