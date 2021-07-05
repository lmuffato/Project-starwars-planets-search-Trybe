import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from '../service/FetchAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const planetsData = await fetchAPI();
      setData(planetsData);
    };
    fetch();
  }, []);

  useEffect(() => {
    setFilteredData(data);
    if (name.filters.filterByName.name !== '') {
      const result = data.filter(
        (planet) => planet.name.toLowerCase().includes(name.filters.filterByName.name),
      );
      setFilteredData(result);
    }
  }, [name, data]);

  const contextValue = {
    data,
    name,
    setName,
    filteredData,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
