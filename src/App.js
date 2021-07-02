import React from 'react';
import Provider from './context/provider';
import Table from './components/table';
import './App.css';

function App() {
  // const { planets } = useContext(ContextApi);
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
