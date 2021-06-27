import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getApi from '../service/getApi';
import Context from './Context';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getApi().then((data) => setPlanets(data));
  }, []);

  return (
    <Context.Provider
      value={
        { planets }
      }
    >
      {children}
    </Context.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
