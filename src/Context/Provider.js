import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import requestApiStarWars from '../services/requestApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [text, setText] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  async function fetchPlanetsFromApi() {
    setIsFetching(true);
    await requestApiStarWars()
      .then(
        (response) => setData(response.results),
        (error) => console.log(error.message),
      )
      .finally(() => setIsFetching(false));
  }

  useEffect(() => {
    fetchPlanetsFromApi();
  }, []);

  const search = (((rows) => {
    const ONE_LESS = -1;
    return rows.filter(
      (row) => row.name.toLowerCase().indexOf(text.toLowerCase()) > ONE_LESS,
    );
  }));

  useEffect(() => {
    function filterResults() {
      let filterPlanets = [];
      filterByNumericValues.forEach((fil) => {
        switch (fil.comparison) {
        case 'maior que':
          filterPlanets = data.filter((row) => row[fil.column] > parseInt(fil.value, 10));
          return setData(filterPlanets);
        case 'menor que':
          filterPlanets = data.filter((row) => row[fil.column] < parseInt(fil.value, 10));
          return setData(filterPlanets);
        case 'igual a':
          filterPlanets = data.filter((row) => row[fil.column] === fil.value);
          return setData(filterPlanets);
        default:
          search(data);
        }
      });
    }
    filterResults();
  }, [filterByNumericValues]);

  const contextStarWars = {
    isFetching,
    data,
    setText,
    search,
    setFilterByNumericValues,
    fetchPlanetsFromApi,
    filters:
      {
        filterByName: {
          name: text,
        },
        filterByNumericValues,
      },
  };

  return (
    <StarWarsContext.Provider
      value={ contextStarWars }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
