import React from 'react';
import './App.css';
import Provider from './Components/Provider';
import TablePlanets from './Components/TablePlanets';

function App() {
  return (
    <Provider>
      <TablePlanets />
    </Provider>
  );
}

export default App;
