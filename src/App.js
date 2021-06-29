import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import PlanetsList from './components/PlanetsList';
import FilterForm from './components/FilterForm';
import './App.css';
import TableHeader from './components/TableHeader';
import SortDropdown from './components/SortDropdown';

function App() {
  return (
    <PlanetsProvider>
      <FilterForm />
      <SortDropdown />
      <table>
        <TableHeader />
        <PlanetsList />
      </table>
    </PlanetsProvider>
  );
}

export default App;
