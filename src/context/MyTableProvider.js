import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyTablecontext from './MyTablecontext';

function MyTableProvider({ children }) {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [filter, setFilter] = useState({ filterName: { name: '' } });

  const contextValue = {
    data,
    setData,
    headers,
    setHeaders,
    filter,
    setFilter,
  };

  useEffect(() => {
    const resquestApi = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const dataApi = await fetch(url).then((paran) => paran.json());
      const heads = Object.keys(dataApi.results[0])
        .filter((paran) => paran !== 'residents');
      setData(dataApi);
      setHeaders(heads);
    // console.log(dataApi);
    // console.log(heads);
    };
    resquestApi();
  }, []);

  return (
    <MyTablecontext.Provider value={ contextValue }>
      { children }
    </MyTablecontext.Provider>
  );
}

MyTableProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyTableProvider;
