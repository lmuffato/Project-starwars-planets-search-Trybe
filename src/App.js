import React from 'react';
import './App.css';
import ServiceApi from './components/services/ServiceApi';
import PlanetProvider from './context/PlanetProvider';
import InputTextFilter from './components/input/InputTextFilter';
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
