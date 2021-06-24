import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ContextAPI from './ContextAPI';
import fetchAPI from '../Services/FetchAPI';

function ProviderAPI({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [resultsApi, setResultsApi] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getApi = async () => {
      const results = await fetchAPI();
      setResultsApi(results);
    };
    setIsLoading(false);
    getApi();
  }, []);

  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });
  function handleChange({ target }) {
    setFilter({
      filters: {
        filterByName: {
          name: target.value,
        },
      },
    });
  }

  return (
    <ContextAPI.Provider value={ { resultsApi, isLoading, handleChange, filter } }>
      {children}
    </ContextAPI.Provider>
  );
}

ProviderAPI.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderAPI;
