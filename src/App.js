import React from 'react';
import './App.css';
import Home from './components/Home';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Home />
    </PlanetsProvider>
  );
}

export default App;

// Enfrentei muito o erro 429 e não sabia a razão;
// a partir do terceiro requisito, consultei o PR do Jodiel (PR n. 72) e decidi refatorar com base na lógica do colega;
