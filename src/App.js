// Go!
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
