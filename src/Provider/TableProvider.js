import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from './Context';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [column, setColumn] = useState('');
  const [operator, setOperator] = useState('');
  const [value, setValue] = useState(null);
  const [filter, setFilter] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '',
      },
    ],
  });

  useEffect(() => {
    const getPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((gokuSSJGod) => gokuSSJGod.json());
      setData(results);
    };
    getPlanets();
  }, []);

  return (
    <context.Provider
      value={ { data,
        filters,
        setFilters,
        filter,
        setFilter,
        column,
        setColumn,
        value,
        setValue,
        operator,
        setOperator } }
    >
      { children }
    </context.Provider>
  );
}
TableProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TableProvider;
