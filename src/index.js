import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FiltersProvider from './context/FiltersProvider';
import PlanetsProvider from './context/PlanetsProvider';

ReactDOM.render(
  <PlanetsProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </PlanetsProvider>,
  document.getElementById('root'),
);
