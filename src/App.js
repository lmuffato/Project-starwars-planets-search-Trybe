import React from 'react';
import './App.css';
import Planets from './pages/Planets';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Planets />
    </PlanetsProvider>
  );
}

export default App;
