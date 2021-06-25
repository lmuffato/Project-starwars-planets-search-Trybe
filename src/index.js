import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProviderPlanets from './context/ProviderPlanets';

ReactDOM.render(<ProviderPlanets><App /></ProviderPlanets>,
  document.getElementById('root'));
