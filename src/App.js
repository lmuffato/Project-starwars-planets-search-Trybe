import React from 'react';
import Home from './Pages/Home';

import PlanetsProvider from './context/PlanetsContext';

const App = () => (
  <PlanetsProvider>
    <Home />
  </PlanetsProvider>
);

export default App;
