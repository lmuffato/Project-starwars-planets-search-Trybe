import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import requestApiStarWars from '../services/requestApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [text, setText] = useState('');

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
    search(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextStarWars = {
    isFetching,
    data,
    setText,
    search,
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
