import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import PlanetFilter from './components/PlanetFilter';

function App() {
  return (
    <Provider>
      <PlanetFilter />
      <Table />
    </Provider>
  );
}

export default App;

// requisito 2 e refatoramento do 1 feito com a ajuda de Nathi zebral e Adelino junior
