import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import getPlanets from '../services/data';

function Provider({ children }) {
  const [allPlanets, setallPlanets] = useState([]);
  useEffect(() => {
    async function searchApi() {
      const responseApi = await getPlanets();
      setallPlanets(responseApi);
    }
    searchApi();
  }, []);

  const data = {
    allPlanets,
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
