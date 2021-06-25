import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <section>
      <PlanetProvider>
        <span>Hello, App!</span>
        <Table />
      </PlanetProvider>
    </section>
  );
}

export default App;
