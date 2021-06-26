import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';

import getDataAPI from '../utils/functions';
import MyContext from '../context/myContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  const [filterNumber, setFilterNumber] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const dados = await getDataAPI();
      setData(dados.results);
    };
    fetchApi();
  }, []);

  const handleChange = (valor) => setName(valor);

  const handleClick = (column, comparison, value) => {
    const newFilter = {
      column,
      comparison,
      value,
    };
    setFilterNumber(filterNumber.concat(newFilter));
  };

  const globalState = {
    data,
    handleChange,
    handleClick,
    filters: {
      filterByName: {
        name,
      },
    },
    filterByNumericValues: filterNumber,
  };

  return (
    <MyContext.Provider
      value={ { ...globalState } }
    >
      {children}
    </MyContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: func.isRequired,
};

export default PlanetsProvider;
