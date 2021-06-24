import React from 'react';
import './App.css';
import StarWarsPlanetsTable from './components/StarWarsPlanetsTable';
import StarWarsPlanetsProvider from './context/StarWarsPlanetsProvider';
import Filters from './components/Filters';

function App() {
  return (
    <div>
      <StarWarsPlanetsProvider>
        <Filters />
        <StarWarsPlanetsTable />
      </StarWarsPlanetsProvider>
    </div>
  );
}

export default App;
