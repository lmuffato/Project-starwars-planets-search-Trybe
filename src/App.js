import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';

function App() {
  const DOCUMENT_TITLE = 'Star Wars Planets Search';
  document.title = DOCUMENT_TITLE;

  return (
    <PlanetsProvider>
      <h1>{ DOCUMENT_TITLE }</h1>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
