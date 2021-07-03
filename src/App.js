import React from 'react';
import './App.css';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';

function App() {
  return (
    <div>
      <PlanetProvider>
        {/* <InputTextFilter /> */}
        <Table />
        {/* <ServiceApi /> */}
      </PlanetProvider>
    </div>
  );
}

export default App;
