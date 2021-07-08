import React from 'react';
import PropTypes from 'prop-types';
import getApi from '../componentes/GetApi';

const PlanetContext = React.createContext();

const PlanetProveider = ({ children }) => {
  const initial = {
    filterByName: '',
    filterByNumericValues: [],
  };
  const [data, setData] = React.useState([]);
  const [filters, setFilters] = React.useState(initial);

  const fetchData = async () => {
    const getPlanets = await getApi();
    setData(getPlanets);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const value = { data, filters, setFilters, setData };

  return (
    <PlanetContext.Provider value={ value }>
      {children}

    </PlanetContext.Provider>
  );
};

PlanetProveider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export { PlanetProveider, PlanetContext };