import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import PlanetFilter from './components/PlanetFilter';
import NumbersFilters from './components/NumberFilter';

function App() {
  return (
    <Provider>
      <PlanetFilter />
      <NumbersFilters />
      <Table />
    </Provider>
  );
}

export default App;

// requisito 2 e refatoramento do 1 feito com a ajuda de Nathi zebral e Adelino junior
// requisito 3 e 4 feito com ajuda dos colegas Nathi Zebral e Perycles dos Reis Floriano
