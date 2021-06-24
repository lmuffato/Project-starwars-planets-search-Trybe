import React from 'react';
import './App.css';

import ProviderAPI from './context/ProviderAPI';
import Table from './Table';

function App() {
  return (
    <ProviderAPI>
      <Table />
    </ProviderAPI>
  );
}

export default App;
