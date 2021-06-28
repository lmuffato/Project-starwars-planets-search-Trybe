import React from 'react';
import PropTypes from 'prop-types';
import reqAPI from '../services/reqAPI';

const StarWarsContext = React.createContext();

const Provider = ({ children }) => {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    const planets = await reqAPI();
    setData(planets);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const value = data;

  return (
    <StarWarsContext.Provider value={ value }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export { Provider, StarWarsContext };
