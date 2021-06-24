import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

export default function ProviderPlanet({ children }) {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);
  const [valueColumn, setValueColumn] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  const val = {
    valueColumn,
    setValueColumn,
    data,
    setData,
    newData,
    setNewData,
    column,
    setColumn,
    comparison,
    setComparison,
    number,
    setNumber,
  };

  return (
    <PlanetContext.Provider value={ val }>
      { children }
    </PlanetContext.Provider>
  );
}

ProviderPlanet.propTypes = {
  children: PropTypes.node.isRequired,
};
