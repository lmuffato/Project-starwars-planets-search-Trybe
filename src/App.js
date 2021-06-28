// requisito feito com ajuda do colega Nilson Ribeiro.
import React from 'react';
import './App.css';
import Provider from './Components/Provider';
import TablePlanets from './Components/TablePlanets';
import PlanetFilters from './Components/PlanetFilters';
import ClearFilterButton from './Components/ClearFilterButton';

function App() {
  return (
    <div className="scifiUI">
      <Provider>
        <header>
          <PlanetFilters />
          <ClearFilterButton />
        </header>
        <TablePlanets />
      </Provider>
    </div>
  );
}

export default App;
