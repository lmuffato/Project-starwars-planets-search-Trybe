import React, { useEffect, useState } from 'react';
import './App.css';
// import Provider from './Provider';
import Table from './components/Table';
import FilterForm from './components/FilterForm';
import FilterTable from './components/FilterTable';
import StarwarsContext from './context/context';

const columnFilters = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [columnFiltersState] = useState(columnFilters);

  useEffect(() => {
    const fetchApi = async () => {
      const starwarsApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const json = await starwarsApi.json();
      // console.log(json);
      const { results } = json;
      results.forEach((planets) => delete planets.residents);
      setData(results);
    };
    fetchApi();
  }, []);

  const context = {
    data,
    filters,
    setFilters,
    columnFiltersState,
  };
  return (
    <StarwarsContext.Provider value={ context }>
      <FilterForm />
      <FilterTable />
      <Table />
    </StarwarsContext.Provider>
  );
}

export default App;
