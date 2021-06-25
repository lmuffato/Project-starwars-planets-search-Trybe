import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';

import getDataAPI from '../utils/functions';
import MyContext from '../context/myContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const dados = await getDataAPI();
      setData(dados);
    })();
  }, []);

  return (
    <MyContext.Provider value={ { data } }>
      {children}
    </MyContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: func.isRequired,
};

export default PlanetsProvider;
