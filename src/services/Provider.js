import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsFetch from '../services/Api';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataApi, setDataApi] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterHandler, setFilterHandler] = useState({
    column: 'population', comparison: 'maior que', value: '',
  });

  // Filtros Salvos
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const [sortFilter, setSortFilter] = useState({
    column: 'population',
    sort: '',
  });

  useEffect(() => {
    const filtered = data.filter((item) => item.name.toLowerCase().includes('name'));
    setFilteredData(filtered);
  }, [data, 'name']);

  const ONE = 1;
  useEffect(() => {
    fetchData.then((response) => {
      setData(response.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -ONE;
        }
        return 0;
      }));
    });
  }, []);

  const [sortOption, setSortOption] = useState('teste');

  const handleSortClick = () => {
    let newFilter = filteredData;
    const { column: orderColumn } = sortFilter;
    if (sortFilter.sort === 'DESC') {
      newFilter = newFilter.sort((a, b) => {
        if (Number(a[orderColumn]) < Number(b[orderColumn])) {
          return 1;
        }
        if (Number(a[orderColumn]) > Number(b[orderColumn])) {
          return -ONE;
        }
        return 0;
      });
      const rand = Math.random().toString();
      setSortOption(rand);
      setFilteredData(newFilter);
      console.log(filteredData);
    }
    if (sortFilter.sort === 'ASC') {
      newFilter = newFilter.sort((a, b) => {
        if (Number(a[orderColumn]) < Number(b[orderColumn])) {
          return -ONE;
        }
        if (Number(a[orderColumn]) > Number(b[orderColumn])) {
          return 1;
        }
        return 0;
      });
      const rand = Math.random().toString();
      setSortOption(rand);
      console.log(newFilter);
      setFilteredData(newFilter);
    }
  };

  // Filtrando por valor populacional a partir do reultado da optionBox
  function filterNumericValues(results) {
    const numericValues = filters.filterByNumericValues;
    if (!numericValues.length) {
      return setData(results);
    }

    const value = results.filter((result) => (
      numericValues.every((numericFilter) => {
        switch (numericFilter.comparison) {
          case 'maior que':
            if (
              Number(result[numericFilter.column])
              > parseInt(numericFilter.value, 10)
              && parseInt(numericFilter.value, 10) !== 'unknown'
            ) {
              return true;
            }
            return false;

          case 'menor que':
            if (
              Number(result[numericFilter.column])
              < parseInt(numericFilter.value, 10)
              && parseInt(numericFilter.value, 10) !== 'unknown'
            ) {
              return true;
            }
            return false;

          case 'igual a':
            if (
              parseInt(result[numericFilter.column], 10)
              === parseInt(numericFilter.value, 10)
              && parseInt(numericFilter.value, 10) !== 'unknown'
            ) {
              return true;
            }
            return false;
          default:
            return false;
        }
      })
    ));
    setData(value);
  }
  // Filtro direto a partir do nome (colocando em caixa baixa para comparação)
  function filterName(results) {
    const { name } = filters.filterByName;
    return results.filter(
      (result) => result.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        || name === '',
    );
  }
  // Chama da API
  useEffect(() => {
    async function fetchData() {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const json = await request.json();
      return json.results;
    }
    }, []);
    useEffect(() => {
      const results = dataApi;
      const filteredName = filterName(results);
      filterNumericValues(filteredName);
    }, [filters]);


  const context = {
    data,
    setData,
    filters,
    setFilters,
    filterHandler,
    setFilterHandler,
    sortFilter,
    setSortFilter,
    handleSortClick,
    sortOption,
  };
  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
