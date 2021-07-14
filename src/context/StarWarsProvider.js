import React, { useState, useEffect} from 'react';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services/fetchApi';

function StarWarsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {},
  });

  useEffect(() => {
    setIsLoading(true);
    fetchApi().then((results) => setData(results));
    setIsLoading(false);
  }, []);

  return (
    <StarWarsContext.Provider value={ { isLoading, data } }>
      { children }
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;
