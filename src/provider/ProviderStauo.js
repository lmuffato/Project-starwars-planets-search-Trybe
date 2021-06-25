import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import ContextStauo from './ContextStauo';
import getApiStauo from '../services/fetchApiStauo';
import { valuesArray } from '../services/getSelects';

function Provider({ children }) {
  const initial = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const [data, setData] = useState([]);
  const [dataTitle, setDataTitle] = useState([]);
  const [text, setText] = useState('');
  const [filters, setFilters] = useState(initial);
  const [filtersArray, setFiltersArray] = useState(valuesArray);

  const respApi = async () => {
    const results = await getApiStauo();
    setData(results);
    setDataTitle(results);
    setFiltersArray(valuesArray);
  };

  useEffect(() => {
    respApi();
  }, []);

  const deleleElement = () => {
    const { filterByNumericValues } = filters;
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach((itemList) => {
        const newFilter = filtersArray.filter((item) => item !== itemList.column);
        setFiltersArray(newFilter);
      });
    }
    return 'nao entrou';
  };

  const filtering = () => {
    const { filterByNumericValues } = filters;

    filterByNumericValues.forEach((item) => {
      const { column, comparison, value } = item;
      switch (comparison) {
      case 'maior que':
        setDataTitle(
          [...dataTitle
            .filter((planet) => Number(planet[column]) > Number(value))],
        );
        return dataTitle;
      case 'menor que':
        setDataTitle(
          [...dataTitle
            .filter((planet) => Number(planet[column]) < Number(value))],
        );
        return dataTitle;
      case 'igual a':
        setDataTitle(
          [...dataTitle
            .filter((planet) => Number(planet[column]) === Number(value))],
        );
        return dataTitle;
      default:
        return dataTitle;
      }
    });
    deleleElement();
  };

  useEffect(() => {
    filtering();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const context = {
    data,
    dataTitle,
    setData,
    text,
    setText,
    filters,
    setFilters,
    filtersArray,
  };

  return (
    <ContextStauo.Provider value={ context }>
      { children }
    </ContextStauo.Provider>
  );
}

Provider.propTypes = {
  children: object,
}.isRequired;

export default Provider;
