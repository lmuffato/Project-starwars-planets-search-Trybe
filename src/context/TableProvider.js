import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    const getData = async () => {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const APIResult = await fetch(URL).then((d) => d.json());
      const myHeads = Object.keys(APIResult.results[0]).filter((e) => e !== 'residents');
      setData(APIResult);
      setHeaders(myHeads);
    };
    getData();
  }, []);

  return (
    <TableContext.Provider value={ { data, headers, setFilters, filters } }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default TableProvider;
