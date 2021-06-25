import React, { useEffect, useState } from 'react';
import Context from './Context';

function dataProvider(children) {
  const [data, setData] = useState();

  useEffect(() => {
    const getAPI = async () => {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { response } = await fetch(URL).then((info) => info.json());
      setData(response);
    };

    getAPI();
  }, []);

  return (
    <Context.Provider value={ data }>
      {children}
    </Context.Provider>
  );
}

export default dataProvider;
