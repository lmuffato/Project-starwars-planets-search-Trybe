import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <section>
        <span>Star Wars!</span>
        <Header />
        <Table />
      </section>
    </PlanetProvider>
  );
}

export default App;
