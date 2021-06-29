import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  const [planetsList, setPlanetsList] = useState([]);
  const [filterNum, setFilterNum] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((planets) => planets.json());
      const headerNames = Object.keys(results[0]);
      const headerItems = headerNames.filter((head) => head !== 'residents');
      const planets = results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setData(planets);
      setHeader(headerItems);
      setPlanetsList(planets);
    };
    fetchPlanets();
  }, []);

  const handleFilter = (event) => {
    const columnSelect = document.getElementById('column-filter');
    const columnOption = document.createElement('option');
    const comparisonSelect = document.getElementById('comparison-filter');
    const comparisonOption = document.createElement('option');
    if (filterNum.length === 1) {
      columnOption.setAttribute('id', filterNum[0].column);
      columnOption.innerText = filterNum[0].column;
      columnSelect.appendChild(columnOption);
      comparisonOption.setAttribute('id', filterNum[0].comparison);
      comparisonOption.innerText = filterNum[0].comparison;
      comparisonSelect.appendChild(comparisonOption);
      setPlanetsList(data);
      setFilterNum('');
    } else if (filterNum.length > 1 && event.target.id === 'button0') {
      columnOption.setAttribute('id', filterNum[0].column);
      columnOption.innerText = filterNum[0].column;
      columnSelect.appendChild(columnOption);
      comparisonOption.setAttribute('id', filterNum[0].comparison);
      comparisonOption.innerText = filterNum[0].comparison;
      comparisonSelect.appendChild(comparisonOption);
      const newFilter = filterNum.pop();
      setFilterNum([newFilter]);
      if (filterNum[0].comparison === 'maior que') {
        const filteredPlanets = data.filter((planet) => (
          planet[filterNum[0].column] > Number(filterNum[0].value)));
        setPlanetsList(filteredPlanets);
      } else if (filterNum[0].comparison === 'menor que') {
        const filteredPlanets = data.filter((planet) => (
          planet[filterNum[0].column] < Number(filterNum[0].value)));
        setPlanetsList(filteredPlanets);
      } else if (filterNum[0].comparison === 'igual a') {
        const filteredPlanets = data.filter((planet) => (
          planet[filterNum[0].column] === filterNum[0].value));
        setPlanetsList(filteredPlanets);
      }
    } else if (filterNum.length > 1 && event.target.id === 'button1') {
      columnOption.setAttribute('id', filterNum[1].column);
      columnOption.innerText = filterNum[1].column;
      columnSelect.appendChild(columnOption);
      comparisonOption.setAttribute('id', filterNum[1].comparison);
      comparisonOption.innerText = filterNum[1].comparison;
      comparisonSelect.appendChild(comparisonOption);
      const newFilter = filterNum.shift();
      setFilterNum([newFilter]);
      if (filterNum[0].comparison === 'maior que') {
        const filteredPlanets = data.filter((planet) => (
          planet[filterNum[0].column] > Number(filterNum[0].value)));
        setPlanetsList(filteredPlanets);
      } else if (filterNum[0].comparison === 'menor que') {
        const filteredPlanets = data.filter((planet) => (
          planet[filterNum[0].column] < Number(filterNum[0].value)));
        setPlanetsList(filteredPlanets);
      } else if (filterNum[0].comparison === 'igual a') {
        const filteredPlanets = data.filter((planet) => (
          planet[filterNum[0].column] === filterNum[0].value));
        setPlanetsList(filteredPlanets);
      }
    }
  };

  const contextValue = {
    data,
    header,
    name,
    setName,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    planetsList,
    setPlanetsList,
    filterNum,
    setFilterNum,
    handleFilter,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
