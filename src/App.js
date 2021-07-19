import './App.css';
import React, { useState, useEffect } from 'react';
import AppContext from './context/AppContext';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchItems, setSearchItems] = useState(0);
  const [filter, setFilter] = useState(
    {
      filters: {
        filterByName: '',
      },
      filterByNumericValues: [{
        column: 'population',
        comparison: 'moreThan',
        value: '0',
      }],
    },
  );

  useEffect(() => {
    const planetsApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      // const endpoint = 'https://swapi.dev/api/planets';
      const request = await fetch(endpoint);
      const { results } = await request.json();
      setData(results);
    };

    planetsApi();
  }, []);

  return (
    <AppContext.Provider
      value={
        { data, search, searchItems, filter, setSearch, setSearchItems, setFilter }
      }
    >
      <Table />
    </AppContext.Provider>
  );
}

export default App;
