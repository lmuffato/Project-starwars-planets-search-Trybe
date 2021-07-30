import './styles/index.css';
import React, { useState, useEffect } from 'react';
import AppContext from './context/AppContext';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [resultsAPI, setResultsAPI] = useState([]);
  const [searchItems, setSearchItems] = useState(0);
  const [orderInput, setOrderInput] = useState('DESC');
  const [selCategory, setSelCategory] = useState('');
  const [filter, setFilter] = useState(
    {
      filters: {
        filterByName: '',
      },
      filterByNumericValues: [{
        column: '',
        comparison: '',
        value: '',
      }],
      order: {
        column: 'Name',
        sort: 'ASC',
      },
    },
  );

  useEffect(() => {
    const planetsApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      // const endpoint = 'https://swapi.dev/api/planets';
      const request = await fetch(endpoint);
      const { results } = await request.json();

      /**
       * @source https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      */
      function ordena(a, b) {
        const lessOne = -1;
        if (a.name > b.name) return 1;
        if (a.name < b.name) return lessOne;
        return 0;
      }

      const ordened = results.sort(ordena);
      setData(ordened);
      setResultsAPI(results);
    };

    planetsApi();
  }, []);

  const defineOrder = () => {
    function desordena(a, b) {
      const lessOne = -1;
      if (parseInt(a[selCategory], 0) < parseInt(b[selCategory], 0)) return 1;
      if (parseInt(a[selCategory], 0) > parseInt(b[selCategory], 0)) return lessOne;
      return 0;
    }

    setFilter((prevState) => (
      { ...prevState,
        order: {
          sort: orderInput,
          column: selCategory,
        },
      }
    ));

    const unordened = resultsAPI.sort(desordena);
    console.log(unordened);
    setData(unordened);

    console.log('zé esta me ajudando');
  };

  return (
    <AppContext.Provider
      value={
        {
          data,
          search,
          searchItems,
          filter,
          setSearch,
          setSearchItems,
          setFilter,
          defineOrder,
          orderInput,
          setOrderInput,
          selCategory,
          setSelCategory }
      }
    >
      <Table />
    </AppContext.Provider>
  );
}

export default App;
