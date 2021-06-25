import React, { useContext, useEffect } from 'react';
import ContextPlanets from './context/ContextPlanets';
import './App.css';
import FormFilters from './components/FormFilters';

function App() {
  const { getDataPlanets, filteredPlanets, isLoalding } = useContext(ContextPlanets);
  useEffect(() => {
    const inicio = async () => {
      await getDataPlanets();
    };
    inicio();
    // getDataPlanets();
  }, []);
  return (
    <main>
      <FormFilters />
      {
        isLoalding
          ? <h1>Carregando</h1>
          : 
      }
    </main>
  );
}

export default App;
