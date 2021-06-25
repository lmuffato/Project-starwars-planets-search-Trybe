import React, { useState, useEffect } from 'react';

import propTypes from 'prop-types';
import planetsContext from './PlanetsContext';
import fetchStarWars from '../services/fetchStarWarsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');
  const [btnFilter, setBtnFilter] = useState(false);
  const [pop, setPop] = useState({ name: 'population', used: false });
  const [orbit, setOrbit] = useState({ name: 'orbital_period', used: false });
  const [diam, setDiam] = useState({ name: 'diameter', used: false });
  const [rotation, setRotation] = useState({ name: 'rotation_period', used: false });
  const [surface, setSurface] = useState({ name: 'surface_water', used: false });

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchStarWars();
      setData(results);
    };
    getPlanets();
  }, []);

  const provider = {
    data,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    },
    setName,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    btnFilter,
    setBtnFilter,
    pop,
    setPop,
    orbit,
    setOrbit,
    diam,
    setDiam,
    rotation,
    setRotation,
    surface,
    setSurface,
  };

  return (
    <planetsContext.Provider value={ provider }>
      {children}
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default PlanetsProvider;
