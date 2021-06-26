// requisito feito com ajuda do colega Nilson Ribeiro.
import React from 'react';
import './App.css';
import Provider from './Components/Provider';
import TablePlanets from './Components/TablePlanets';
import PlanetFilters from './Components/PlanetFilters';

function App() {
  return (
    <Provider>
      <PlanetFilters />
      <TablePlanets />
    </Provider>
  );
}

export default App;
