import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import planetsApi from '../service/planetsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputTyped, setInputTyped] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const [filters, setFilters] = useState({
    filtersByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  });

  useEffect(() => {
    const getRequest = async () => {
      const request = await planetsApi();
      console.log(request);
      const dataResults = request.results;
      const filtered = dataResults.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setData((set) => set.concat(filtered));
    };
    getRequest();
  }, []);

  const handleInputFilter = (value) => {
    setInputTyped(value);
  };

  useEffect(() => {
    setFilters((prevState) => ({
      ...prevState,
      filtersByName: {
        name: inputTyped,
      },
    }));
  }, [inputTyped]);

  const handleSelectedFilters = (object) => {
    const repeated = filters.filterByNumericValues
      .some((prev) => prev.column === object.column);
    if (!repeated) setSelectedFilters(object);
  };

  const handleDeleteFilter = (name) => {
    const prevFilter = filters.filterByNumericValues;
    const renewFilter = prevFilter.filter((each) => each.column !== name);
    console.log(renewFilter);
    if (renewFilter.length >= 1) {
      return setFilters((prevState) => ({
        ...prevState,
        filterByNumericValues: [renewFilter],
      }));
    }
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [],
    }));
  };

  useEffect(() => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [...prevState.filterByNumericValues.concat(selectedFilters)],
    }));
  }, [selectedFilters]);

  const contextValues = {
    data,
    isLoading,
    setData,
    setIsLoading,
    filters,
    handleInputFilter,
    handleSelectedFilters,
    handleDeleteFilter,
  };

  return (
    <PlanetsContext.Provider value={ contextValues }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
