import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planetsList, setPlanetsList] = useState([]);
  const [planetsFiltred, setPlanetsFiltred] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [filters, setFilters] = useState({});
  const [updateFilter, setUpdateFilter] = useState(false);

  const applyFilter = () => {
    setFilterByNumericValues(
      filterByNumericValues.concat({
        column: columnFilter,
        comparison: comparisonFilter,
        value: valueFilter,
      }),
    );
  };

  // ifthen();

  return (
    <main>
      <PlanetContext.Provider
        value={ {
          planetsList,
          setPlanetsList,
          planetsFiltred,
          setPlanetsFiltred,
          tableColumns,
          setTableColumns,

          filterByName,
          setFilterByName,
          filterByNumericValues,
          setFilterByNumericValues,

          filters,
          setFilters,

          updateFilter,
          setUpdateFilter,

          columnFilter,
          setColumnFilter,
          comparisonFilter,
          setComparisonFilter,
          valueFilter,
          setValueFilter,
          applyFilter,

        } }
      >
        {children}
      </PlanetContext.Provider>
    </main>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetProvider;
