import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';

import getDataAPI from '../utils/functions';
import MyContext from '../context/myContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState({});
  const [name, setName] = useState('');

  useEffect(() => {
    (async () => {
      const dados = await getDataAPI();
      setData(dados);
    })();
  }, []);

  const handleChange = (value) => setName(value);

  return (
    <MyContext.Provider
      value={ { data, handleChange, filters: { filterByName: { name } } } }
    >
      {children}
    </MyContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: func.isRequired,
};

export default PlanetsProvider;
