import React from 'react';
import Home from './pages/Home';
import PlanetsContext from './utils/PlanetsContext/PlanetsProvider';
import './App.css';

function App() {
  return (
    <PlanetsContext>
      <Home />
    </PlanetsContext>
  );
}

export default App;
