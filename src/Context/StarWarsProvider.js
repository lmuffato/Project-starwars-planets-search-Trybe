import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(true);
  const [filterdInfo, setFilteredInfo] = useState(info);

  // 'https://swapi.dev/api/planets/'
  useEffect(() => {
    async function StarAPI() {
      const requisition = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const results = await requisition.json();
      setInfo(results.results);
      setLoading(false);
      setFilteredInfo(results.results);
    }
    StarAPI();
  }, []);

  const values = { loading,
    info,
    setInfo,
    filterdInfo,
    setFilteredInfo };

  return (
    <StarWarsContext.Provider value={ values }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
