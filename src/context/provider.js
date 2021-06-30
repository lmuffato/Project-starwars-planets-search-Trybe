import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services';
import PlanetsContext from './index';

function Provider({ children }) {
  const filterState = { filterByName: { name: '' }, filterByNumericValues: [] };
  const [filters, setFilters] = useState(filterState);
  const [handle, setHandle] = useState('');
  const [data, setData] = useState('');
  const [planets, setPlanets] = useState(data);

  useEffect(() => {
    const getPlanetsData = async () => {
      const planetsInfo = await getPlanets();
      const filteredElements = planetsInfo.map(
        (element) => Object.keys(element).reduce((object, key) => {
          if (key !== 'residents') {
            object[key] = element[key];
          }
          return object;
        }, []),
      );
      setData(filteredElements);
      setPlanets(filteredElements);
    };

    getPlanetsData();
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const handleNumericChange = (event) => {
    const { value: option, name } = event.target;
    setHandle((state) => ({ ...state, [name]: option }));
  };

  const numericFilter = () => {
    const filterNumber = 4;
    if (filters.filterByNumericValues.length < filterNumber) {
      setFilters({ ...filters,
        filterByNumericValues: [...filters.filterByNumericValues,
          { ...handle }] });
      const option = document.getElementById(handle.column);
      option.remove();
    }
  };

  const providerVariables = ({
    data,
    planets,
    filters,
    handleChange,
    setPlanets,
    handleNumericChange,
    numericFilter,
  });

  return (
    <PlanetsContext.Provider value={ providerVariables }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Provider;
