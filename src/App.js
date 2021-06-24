import React from 'react';

import Table from './components/Table';
import PlanetsProvider from './context/PlanetProvider';

function PlanetsForm() {
  return (
    <PlanetsProvider>
      <main>
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default PlanetsForm;
