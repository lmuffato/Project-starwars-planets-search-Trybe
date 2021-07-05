import React from 'react';
import Provider from './Provider/provider';
import ProviderFilter from './Provider/providerFilter';
import Filter from './components/filter';
import Table from './components/table';
import './App.css';

function App() {
  // const { planets } = useContext(ContextApi);
  return (
    <Provider>
      <ProviderFilter>
        <Filter />
        <Table />
      </ProviderFilter>
    </Provider>
  );
}

export default App;
