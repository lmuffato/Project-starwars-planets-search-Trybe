import React, { useContext, useEffect } from 'react';
import ContextPlanets from './context/ContextPlanets';
import './App.css';
import FormFilters from './components/FormFilters';
import Table from './components/Table';
import ActiveFilters from './components/ActiveFilters';

function App() {
  const { getDataPlanets, isLoalding } = useContext(ContextPlanets);
  useEffect(() => {
    const start = async () => {
      await getDataPlanets();
    };
    start();
  }, []);
  return (
    <main>
      <FormFilters />
      <ActiveFilters />
      {
        isLoalding
          ? <h1>Carregando</h1>
          : <Table />
      }
    </main>
  );
}

export default App;
