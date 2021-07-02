import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import getPlanets from '../services/data';

function Provider({ children }) {
  const [allPlanets, setallPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);
  const [reset, setReset] = useState(0);
  const [selectType, setSelectType] = useState(
    ['population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  );

  const [selected, setSelected] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const [comparison, setComparison] = useState(['maior que', 'igual a', 'menor que']);

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
    selectType,
    setSelectType,
    selected,
    setSelected,
    comparison,
    setComparison,
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
