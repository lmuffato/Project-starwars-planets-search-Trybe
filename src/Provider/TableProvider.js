import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from './Context';

function TableProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((gokuSSJGod) => gokuSSJGod.json());
      setData(results);
    };
    getPlanets();
  }, []);

  return (
    <context.Provider value={ { data } }>
      { children }
    </context.Provider>
  );
}
TableProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TableProvider;
