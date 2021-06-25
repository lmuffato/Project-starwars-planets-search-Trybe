import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from '../services/fetchAPI';

const Provider = ({ children }) => {
  const [name, setName] = useState('');
  const [planetList, setPlanetList] = useState(null);
  const [tableHeaders, setTableHeaders] = useState(null);

  const filterTableContent = ({ results }, headers) => {
    const tableData = results.map((planet) => headers.map((header) => planet[header]));
    setPlanetList(tableData);
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchAPI();
      const headers = Object.keys(response.results[0])
        .filter((header) => header !== 'residents');

      setTableHeaders(headers);
      filterTableContent(response, headers);
    };
    fetch();
  }, []);

  const contextValue = {
    data: {
      planetList,
      tableHeaders,
    },
    filters: {
      filterByName: {
        name,
        setName,
      },
    },
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
