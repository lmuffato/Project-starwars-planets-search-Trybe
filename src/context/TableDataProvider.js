import { createElement as e, useEffect, useState } from 'react';
import { arrayOf, object } from 'prop-types';
import { first } from '../utils';

import getPlanetsData, { columns } from '../services/swAPI';
import TableContext from './TableDataContext';

const { Provider } = TableContext;
const TableDataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ filterByName: '', filterByNumericValue: [] });
  const [availableColumns, setAvailableColumns] = useState([]);
  useEffect(() => {
    first(setLoading(true))
      .then(getPlanetsData)
      .then(setData)
      .then(setLoading(false));
  }, []);
  useEffect(() => {
    setAvailableColumns(columns.filter((column) => (
      filters.filterByNumericValue.reduce((acc, { column: alreadyUsedColumn }) => (
        acc ? column !== alreadyUsedColumn : false
      ), true)
    )));
  }, [filters.filterByNumericValue]);

  const setFilterByName = (name) => { setFilters({ ...filters, filterByName: name }); };
  const addFilterByNumericValue = ({ column, comparison, value }) => {
    setFilters({ ...filters,
      filterByNumericValue: [
        ...filters.filterByNumericValue,
        { column, comparison, value },
      ] });
  };
  const removeFilterByNumericValue = (columnToRemove) => {
    setFilters({ ...filters,
      filterByNumericValue: filters.filterByNumericValue.filter(
        ({ column }) => column !== columnToRemove,
      ) });
  };

  return (
    e(Provider,
      { value: { data,
        loading,
        filters,
        setFilterByName,
        addFilterByNumericValue,
        removeFilterByNumericValue,
        availableColumns } },
      [children])
  );
};

TableDataProvider.propTypes = {
  children: arrayOf(object),
}.isRequired;

export default TableDataProvider;
