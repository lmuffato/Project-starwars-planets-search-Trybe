import React, { useState } from 'react';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  const [inputName, setInputName] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const { target: { value } } = e;
    setInputName(value);
  };

  return (
    <PlanetsProvider>
      <header>
        <h1>Star Wars planet Search</h1>
        <span>your way to home</span>
      </header>
      <main>
        <h3>Your planets here are!</h3>
        <label htmlFor="filterName">
          Filter by name:
          {' '}
          <input
            id="filterName"
            type="text"
            name="inputName"
            data-testid="name-filter"
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <Table inputName={ inputName } />
      </main>
    </PlanetsProvider>
  );
}

export default App;

// https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/
