import React from 'react';
import './App.css';
import Table from './components/Table/index';
import FilterText from './components/FilterText/index';
import FilterByNumerics from './components/FilterByNumerics/FilterByNumerics';

import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <FilterText />
      <FilterByNumerics />
      <Table />
    </AppProvider>
  );
}

export default App;

// Referências usadas:
// PR Daniel Fasanaro https://github.com/tryber/sd-09-project-starwars-planets-search/tree/danielfasanaro-sd-09-project-starwars-planets-search
// PR Ana ventura https://github.com/tryber/sd-010-a-project-starwars-planets-search/tree/anaventura1811-starwars-planets-search-project
// Pair Programming Conrado Medeiros
// Help do melhor localizador de erros, Coruja.
