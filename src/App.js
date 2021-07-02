import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import FilterComponent from './components/FilterComponent';
import FilterList from './components/FilterList';

function App() {
  const DOCUMENT_TITLE = 'Star Wars Planets Search';
  document.title = DOCUMENT_TITLE;

  return (
    <PlanetsProvider>
      <h1>{ DOCUMENT_TITLE }</h1>
      <FilterComponent />
      <FilterList />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
