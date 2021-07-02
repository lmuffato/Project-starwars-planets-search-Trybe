import React from 'react';
import './App.css';
import PlanetaProvider from './providers/PlanetaProvider';

import Home from './pages/Home';

function App() {
  return (
    <PlanetaProvider>
      <Home />
    </PlanetaProvider>
  );
}

export default App;
