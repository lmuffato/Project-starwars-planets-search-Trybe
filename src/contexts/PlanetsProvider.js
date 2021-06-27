import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  // const [column, setColumn] = useState('');
  // const [comparison, setComparison] = useState('');
  // const [value, setValue] = useState('');
  const [numericHandle, setNumericHandle] = useState('');
  const [data, setData] = useState('');
  const [planets, setPlanets] = useState(data);
  const FILTERS_INITIAL_STATE = { filterByName: { name: '' }, filterByNumericValues: [] };
  const [filters, setFilters] = useState(FILTERS_INITIAL_STATE);
  const [errors, setErrors] = useState({ filters: '' });

  useEffect(() => {
    const getPlanetsData = async () => {
      const planetsData = await getPlanets();
      const filteredKeys = planetsData.map(
        (el) => Object.keys(el).reduce((object, key) => {
          if (key !== 'residents') {
            object[key] = el[key];
          }
          return object;
        }, {}),
      );
      setData(filteredKeys);
      setPlanets(filteredKeys);
    };

    getPlanetsData();
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const numericFilter = () => {
    const MAX_FILTER_VALUE = 4;
    if (filters.filterByNumericValues.length < MAX_FILTER_VALUE) {
      setFilters({ ...filters,
        filterByNumericValues: [...filters.filterByNumericValues,
          { ...numericHandle }] });
      const option = document.getElementById(numericHandle.column);
      option.remove();
      // const defaultOption = document.getElementById('select');
      // defaultOption.selected = 'selected';
      // const changeOption = document.getElementById('column-filter');
    } else {
      setErrors({ filters: 'Número máximo de filtros selecionados.' });
    }
  };

  const handleNumericChange = (event) => {
    const { value: option, name } = event.target;
    setNumericHandle((state) => ({ ...state, [name]: option }));
  };

  const context = ({
    data,
    planets,
    filters,
    handleChange,
    setPlanets,
    handleNumericChange,
    numericFilter,
    errors,
  });

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default PlanetsProvider;
