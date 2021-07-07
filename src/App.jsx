import React from 'react';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <PlanetsProvider>
      <header>
        <h1>Star Wars planet Search</h1>
        <span>your way to home</span>
      </header>
      <SearchBar />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

// https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/ USING OBJECTS AS DEFAULT
