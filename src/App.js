import React from 'react';
import './App.css';

import ProviderAPI from './context/ProviderAPI';
import Table from './Components/Table';
import InputFilter from './Components/InputFilter';

function App() {
  return (
    <ProviderAPI>
      <InputFilter />
      <Table />
    </ProviderAPI>
  );
}

export default App;
