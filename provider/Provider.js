import React from 'react';
import PropTypes from 'prop-types';
import reqAPI from '../services/reqAPI';

const StarWarsContext = React.createContext();

const Provider = ({ children }) => {
  const initial = {
    filterByName: '',
    filterByNumericValues: [],
  };
  const [data, setData] = React.useState([]);
  const [filters, setFilters] = React.useState(initial);

  const fetchData = async () => {
    const planets = await reqAPI();
    setData(planets);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const value = { data, filters, setFilters, setData };

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
