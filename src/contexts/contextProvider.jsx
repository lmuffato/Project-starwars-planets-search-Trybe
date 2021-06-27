import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import planetsContext from './planetsContext';
import FETCH_PLANETS from '../services/MayTheFetchBeWithYou';

function PlanetsProvider({ children }) {
  const filteredPlanetName = {
    filterByName: {
      name: '',
    },
  };
  const [data, setdata] = useState([]);
  const [theadData, settheadData] = useState([]);
  const [planetInput, setPlanetInput] = useState(filteredPlanetName);
  const [filteredPlanet, setFilteredPlanet] = useState([]);

  useEffect(() => {
    FETCH_PLANETS().then(({ results }) => setdata(results));
  }, []);

  useEffect(() => {
    const lookingForPlanet = data
      .filter((planet) => (planet.name
        .includes(planetInput.filterByName.name)));
    setFilteredPlanet(lookingForPlanet);
  }, [data, planetInput]);

  useEffect(() => {
    if (data.length > 0) {
      const tableHeader = Object.keys(data[0])
        .filter((headText) => headText !== 'residents');
      settheadData(tableHeader);
    }
  }, [data]);

  const contextValue = {
    data,
    theadData,
    setPlanetInput,
    filteredPlanet,
  };

  return (
    <planetsContext.Provider value={ contextValue }>
      {children}
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: object,
}.isRequired;

export default PlanetsProvider;
