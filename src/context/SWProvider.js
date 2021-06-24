import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [returnData, setReturnData] = useState();
  const [keys, setKeys] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  // const [redCar, setRedCar] = useState(false);
  // const [yellowCar, setYellowCar] = useState(false);

  async function fetchApi() {
    await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((response) => {
        response.results.map((planet) => delete planet.residents);
        setReturnData(response.results);
        setKeys(Object.keys(response.results[0]));
      });
  }

  return (
    <SWContext.Provider value={ { returnData, keys, fetchApi } }>
      {children}
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SWProvider;
