import React from 'react';
import './style/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Planets from './pages/Planets';
import PlanetsProvider from './global/planets/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Planets />
    </PlanetsProvider>
  );
}

export default App;
