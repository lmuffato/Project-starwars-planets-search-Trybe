import { createElement as e, useEffect, useState } from 'react';
import { arrayOf, object } from 'prop-types';
import { first } from '../utils';

import { addNewNumValueFilter, removeNumValueFilter, sortBy } from '../utils/filters';
import getPlanetsData, { columns } from '../services/swAPI';
import TableContext from './TableDataContext';

const { Provider } = TableContext;
const TableDataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: '',
    filterByNumericValue: [],
    order: { column: 'name', sort: 'ASC' } });
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

  const setFilterByName = (filterByName) => { setFilters({ ...filters, filterByName }); };
  const addFilterByNumericValue = addNewNumValueFilter(setFilters, filters);
  const removeFilterByNumericValue = removeNumValueFilter(setFilters, filters);
  const setSortBy = sortBy(setFilters, filters);
  return (
    e(Provider,
      { value: { data,
        loading,
        filters,
        setFilterByName,
        addFilterByNumericValue,
        removeFilterByNumericValue,
        setSortBy,
        availableColumns } },
      [children])
  );
};

TableDataProvider.propTypes = {
  children: arrayOf(object),
}.isRequired;

export default TableDataProvider;
