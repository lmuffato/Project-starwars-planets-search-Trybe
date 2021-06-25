import React from 'react';

import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import Filters from './components/Filters';
import './App.css';

function PlanetsForm() {
  return (
    <PlanetsProvider>
      <main className="App">
        <section>
          <Filters />
        </section>
        <section>
          <Table />
        </section>
      </main>
    </PlanetsProvider>
  );
}

export default PlanetsForm;
