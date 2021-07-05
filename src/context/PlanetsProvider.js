import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
// import fakeAPI from '../services/fakeAPI';
import requestAPI from '../services/requestAPI';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [numericFilter, setNumericFilter] = useState([]);
  const [category, setCategory] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  useEffect(() => {
    const FetchApi = async () => {
      setData(await (requestAPI().then((planets) => planets.results)));
    };

    FetchApi();
  }, []);

  // useEffect(() => {
  //   setData(fakeAPI.results);
  // }, []);

  const filterByName = () => {
    if (filterName) {
      return data.filter((item) => item.name.includes(filterName));
    }
    return data;
  };

  function filterByNumber() {
    if (!value || !comparison || !category) {
      return filterByName();
    }

    let result = filterByName();

    numericFilter.forEach((item) => {
      switch (item.comparison) {
      case 'maior que':
        result = result.filter((obj) => Number(obj[item.column]) > Number(item.value));
        break;
      case 'menor que':
        result = result.filter((obj) => Number(obj[item.column]) < Number(item.value));
        break;
      case 'igual a':
        result = result.filter((obj) => Number(obj[item.column]) === Number(item.value));
        break;
      default:
        result = filterByName();
      }
    });
    return result;
  }

  const addNewFilter = () => {
    const newFilterData = [{
      column: category,
      comparison,
      value,
    }];
    setNumericFilter([...numericFilter, ...newFilterData]);
  };

  const context = {
    setFilterName,
    filterByNumber,
    addNewFilter,
    setCategory,
    setComparison,
    setValue,
    numericFilter,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
