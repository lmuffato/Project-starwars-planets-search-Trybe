import React from 'react';
import './App.css';
import OrderFilter from './Components/OrderFilter';
import TableOfPlanets from './Components/TableOfPlanets';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <OrderFilter />
      <TableOfPlanets />
    </Provider>
  );
}

export default App;
