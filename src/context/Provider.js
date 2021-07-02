import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import getPlanets from '../services/data';

function Provider({ children }) {
  const [allPlanets, setallPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);
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
  const [clear, setClear] = useState(0);
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
    selectType,
    setSelectType,
    selected,
    setSelected,
    comparison,
    setComparison,
    clear,
    setClear,
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
