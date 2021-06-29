import React, { useState } from 'react';
import Proptypes from 'prop-types';
import PlanetContext from './ContextPlanets';

function ProviderPlanet({ children }) {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);
  const [ValueColumn, setValueColumn] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);
  const val = {
    ValueColumn,
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
      {children}
    </PlanetContext.Provider>
  );
}

ProviderPlanet.propTypes = {
  children: Proptypes.node.isRequired,
};

export default ProviderPlanet;
