import React, { useState } from 'react';
import PropTypes from 'prop-types';
import starWarContext from './starWarsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState('');
  const [selectInput, setSelectInput] = useState({
    input: '',
    comparison: '',
    valueInput: '',
  });
  const [newFilter, setNewFilter] = useState([]);

  const filterSelect = () => {
    const Obj = {
      column: selectInput.input,
      comparison: selectInput.comparison,
      value: selectInput.valueInput,
    };
    setNewFilter([...newFilter, ...[Obj]]);
  };

  const filterData = () => {
    if (filteredPlanets) {
      return planets.filter((res) => res.name.includes(filteredPlanets));
    }
    return planets;
  };

  const filterBySelected = () => {
    let data = filterData();
    newFilter.forEach((filter) => {
      if (filter.comparison === 'maior que') {
        data = data.filter((planet) => planet[filter.column] > Number(filter.value));
      } else if (filter.comparison === 'menor que') {
        data = data.filter((planet) => planet[filter.column] < Number(filter.value));
      } else if (filter.comparison === 'igual a') {
        data = data.filter(
          (planet) => Number(planet[filter.column]) === Number(filter.value),
        );
      }
    });
    return data;
  };

  const context = {
    data: planets,
    filters: {
      filterByName: {
        name: filteredPlanets,
      },
    },
    setPlanets,
    setFilteredPlanets,
    filter: filterBySelected(),
    setSelectInput,
    selectInput,
    filterSelect,
    newFilter,
  };

  return (
    <div>
      <starWarContext.Provider value={ context }>
        { children }
      </starWarContext.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
