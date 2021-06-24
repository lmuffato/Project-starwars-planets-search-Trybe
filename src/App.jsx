import React, { useEffect } from 'react';
import './App.css';
import fetchPlanets from './services/fetchPlanets';
import Table from './components/Table';

function App() {
  useEffect(() => {
    const planets = async () => {
      const test = await fetchPlanets();
      console.log(test);
    };
    planets();
  }, []);

  return (
    <Table />
  );
}

export default App;
