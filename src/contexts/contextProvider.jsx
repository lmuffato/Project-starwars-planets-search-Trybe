import React, { useEffect, useState, useCallback } from 'react';
import { object } from 'prop-types';
import planetsContext from './planetsContext';
import FETCH_PLANETS from '../services/MayTheFetchBeWithYou';

function PlanetsProvider({ children }) {
  const filteredPlanetName = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{ column: '', comparison: '', value: 5000 }] };

  const [data, setdata] = useState([]);
  const [theadData, settheadData] = useState([]);
  const [planetInput, setPlanetInput] = useState(filteredPlanetName);
  const [filteredPlanet, setFilteredPlanet] = useState([]);

  // esse useEffect serve para por no estado do contexto, todos os planetas recebidos pela API. o setdata(results) SETA/COLOCA os dados do results dentro de data.
  useEffect(() => {
    FETCH_PLANETS().then(({ results }) => setdata(results));
  }, []);

  // esse useEffect possui a lógica que serve para procurar o nome dos planetas ao digitar no input de texto do componente SearchBar . Includes e Contains foram pesquisados , mas aparentemente contains está depreciado/descontinuado
  // https://flaviocopes.com/react-hook-usecallback/

  const handleChangeFilter = useCallback((arr) => {
    const lookingForPlanet = arr
      .filter((planet) => (planet.name
        .includes(planetInput.filterByName.name)));
    return lookingForPlanet;
  }, [planetInput.filterByName.name]);

  const handleClickFilter = useCallback((arr) => {
    const filterbyDiameter = arr.filter((planet) => planet.diameter > filteredPlanetName.filterByNumericValues[0].value);
    return filterbyDiameter;
  },
  [filteredPlanetName.filterByNumericValues]);

  useEffect(() => {
    let lookingForPlanet = data;
    lookingForPlanet = handleChangeFilter(lookingForPlanet);
    lookingForPlanet = handleClickFilter(lookingForPlanet);
    setFilteredPlanet(lookingForPlanet);
  }, [data, planetInput, handleChangeFilter, handleClickFilter]);

  // esse useEffect serve para filtrar a chave 'residents' da resposta da API. recuperando as chaves do planeta e filtrando, removendo 'residents', e criar o Header da tabela
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
