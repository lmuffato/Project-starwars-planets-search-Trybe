import React, { useState, useEffect } from 'react';
import Context from './context/Context';
import Table from './components/table';
import Filter from './components/filter';

function App() {
  const [data, setData] = useState([]);
  const [name, searchName] = useState('');

  const planets = {
    data,
    setData,
    filters: {
      filterByName: {
        name,
      },
    },
    searchName,
  };

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  return (
    <main>
      <Context.Provider value={ planets }>
        <Filter />
        <Table />
      </Context.Provider>
    </main>
  );
}

export default App;
