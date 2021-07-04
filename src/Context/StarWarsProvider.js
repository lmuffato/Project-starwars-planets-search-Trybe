import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function StarAPI() {
      const requisition = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const results = await requisition.json();
      setInfo(results.results);
      setLoading(false);
    }
    StarAPI();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ {
        loading,
        info,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
