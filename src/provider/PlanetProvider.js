import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from '../context/PlanetContext';

function PlanetProvider({ children }) {
  const [object, setObject] = useState([]);
  const context = { object, setObject };
  return (
    <PlanetContext.Provider value={ context }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default PlanetProvider;
