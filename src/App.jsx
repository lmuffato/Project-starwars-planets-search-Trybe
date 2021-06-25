import React from 'react';
import Home from './pages/Home';
import PlanetsContext from './utils/PlanetsContext/PlanetsProvider';

function App() {
  return (
    <PlanetsContext>
      <Home />
    </PlanetsContext>
  );
}

export default App;
