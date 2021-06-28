import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import getPlanets from '../services/data';

function Provider({ children }) {
  const [allPlanets, setallPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);
  const [reset, setReset] = useState(0);
  useEffect(() => {
    async function searchApi() {
      const responseApi = await getPlanets();
      setallPlanets(responseApi);
      setFilteredArray(responseApi);
    }
    searchApi();
  }, []);

  const data = {
    allPlanets,
    filterByName,
    setFilterByName,
    filteredArray,
    setFilteredArray,
    reset,
    setReset,
  };

  return (
    <planetsContext.Provider value={ data }>
      {children}
    </planetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default Provider;
