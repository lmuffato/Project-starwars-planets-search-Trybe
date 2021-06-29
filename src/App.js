import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import PlanetsList from './components/PlanetsList';
import FilterForm from './components/FilterForm';
import './App.css';
import TableHeader from './components/TableHeader';

function App() {
  return (
    <PlanetsProvider>
      <FilterForm />
      <table>
        <TableHeader />
        <PlanetsList />
      </table>
    </PlanetsProvider>
  );
}

export default App;
