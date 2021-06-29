import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import fetchAPI from '../services/fetchAPI';
import Context from './Context';

function Provider({ children }) {
  const [dataRead, dataWrite] = useState([]);
  const [dataFilter, dataFilterWrite] = useState([]); // este dataFilter será acessado no Provider?! mas escrito aqui.
  const [filters, filtersWrite] = useState({ filteredByName: { name: '' },
    filterByNumericValues: [{
      column: 'orbital_period',
      comparison: 'maior-que',
      value: 0,
    }] });
  const [filterByNumber, setFilterBynumber] = useState('orbital_period'); // column
  const [filterComparison, setFilterComparison] = useState('maior-que'); // maior, menor ou igual (comparison)
  const [filterValue, setFilterValue] = useState(0); // value

  const requestAPI = async () => {
    const response = await fetchAPI();
    dataWrite(response.results);
  };
  // console.log(filters);
  useEffect(() => {
    requestAPI(); // a requisição sempre deve ser feita aqui
  }, []);

  const dataValue = { // devo colocar os valores filtrados aqui
    dataRead,
    dataFilterWrite,
    dataFilter,
    filtersWrite,
    filters,
    setFilterBynumber,
    filterByNumber,
    setFilterComparison,
    filterComparison,
    setFilterValue,
    filterValue,
    dataWrite,
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
