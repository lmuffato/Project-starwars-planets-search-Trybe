import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [data, setdata] = useState();
  const [returnData, setReturnData] = useState();
  const [keys, setKeys] = useState();
  const [nameFilter, setNameFilter] = useState();
  const [numericFilters, setNumericFilters] = useState([]);
  const [column, setColumn] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);

  async function fetchApi() {
    await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((response) => {
        response.results.map((planet) => delete planet.residents);
        setdata(response.results);
        setReturnData(response.results);
        setKeys(Object.keys(response.results[0]));
      });
  }

  return (
    <SWContext.Provider
      value={
        { data,
          keys,
          returnData,
          nameFilter,
          numericFilters,
          column,
          fetchApi,
          setReturnData,
          setNameFilter,
          setNumericFilters,
          setColumn }
      }
    >
      {children}
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SWProvider;
