import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from '../service/FetchAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [nameInput, setNameInput] = useState({
    filters:
      {
        filterByName: {
          name: '',
        },
      },
  });
  const [columnSelected, setColumnSelected] = useState('');
  const [comparisonSelected, setComparisonSelected] = useState('');
  const [valueToBeCompared, setValueToBeCompared] = useState('');
  const [filteredByName, setFilteredByName] = useState([]);
  // const [filteredByValue, setFilteredByValue] = useState([]);
  const [filter, setFilter] = useState(false);
  const [filteredData, setFilteredData] = useState(filteredByName);

  /* const filter = {
    filters:
      {
        filterByName: {
          name: nameInput
        },
        filterByNumericValues: [
          {
            column: columnSelected,
            comparison: comparisonSelected,
            value: valueToBeCompared,
          }
        ]
      }
    }; */

  const handleClick = () => {
    if (filter === true) {
      setFilter(false);
    } else setFilter(true);
  };

  useEffect(() => {
    if (filter === true) {
      const filteredValues = data.filter((planet) => {
        if (comparisonSelected === 'maior que') {
          return Number(planet[columnSelected]) > Number(valueToBeCompared);
        } if (comparisonSelected === 'menor que') {
          return Number(planet[columnSelected]) < Number(valueToBeCompared);
        } return Number(planet[columnSelected]) === Number(valueToBeCompared);
      });
      setFilteredData(filteredValues);
    } else {
      setFilteredData(filteredByName);
    }
  }, [
    data, comparisonSelected, columnSelected, valueToBeCompared, filter, filteredByName,
  ]);

  useEffect(() => {
    const fetch = async () => {
      const planetsData = await fetchAPI();
      setData(planetsData);
    };
    fetch();
  }, []);

  useEffect(() => {
    setFilteredByName(data);
    if (nameInput.filters.filterByName.name !== '') {
      const result = data.filter(
        (planet) => planet.name.toLowerCase()
          .includes(nameInput.filters.filterByName.name),
      );
      setFilteredByName(result);
    }
  }, [nameInput, data]);

  const contextValue = {
    data,
    nameInput,
    setNameInput,
    filteredByName,
    setColumnSelected,
    setComparisonSelected,
    setValueToBeCompared,
    // filteredByValue,
    setFilter,
    filteredData,
    handleClick,
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
