import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import fetchAPI from '../services/fetchAPI';
import Context from './Context';

function Provider({ children }) {
  const [dataRead, dataWrite] = useState([]);
  const [dataFilter, dataFilterWrite] = useState([]); // este dataFilter será acessado no Provider?! mas escrito aqui.
  const [filters, filtersWrite] = useState({ filteredByName: { name: '' } });
  const requestAPI = async () => {
    const response = await fetchAPI();
    dataWrite(response.results);
  };
  // console.log(filters);
  useEffect(() => {
    requestAPI(); // a requisição sempre deve ser feita aqui
  }, []);

  // const filterObj = {
  //     filterByName: {
  //       name: '',
  //   },
  // };

  const dataValue = { // devo colocar os valores filtrados aqui
    dataRead,
    dataFilterWrite,
    dataFilter,
    filtersWrite,
    filters,
  };

  return (
    <Context.Provider value={ dataValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
