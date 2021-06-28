import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './Context';
import planets from '../services/requestPlantes';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [dataRender, setDataRender] = useState(data);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const fetchApi = async () => {
    const response = await planets();
    setData(response);
  };

  function filterNamePlanets() {
    setDataRender(name.length > 0 ? data
      .filter((planet) => planet.name.includes(name)) : data);
  }

  function filterNumber() {
    if (comparison === 'maior que') {
      return setDataRender(data.filter((planet) => planet[column] > Number(value)));
    }
    if (comparison === 'menor que') {
      return setDataRender(data.filter((planet) => planet[column] < Number(value)));
    }
    if (comparison === 'igual a') {
      return setDataRender(data.filter((planet) => planet[column] === value));
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    filterNamePlanets();
  }, [name, data]);

  const contextValue = {
    data,
    dataRender,
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
    setColumn,
    setComparison,
    setValue,
    filterNumber,
  };

  return (
    <ContextPlanets.Provider value={ contextValue }>
      {children}
    </ContextPlanets.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
