import { createElement as e, useEffect, useState } from 'react';
import { arrayOf, object } from 'prop-types';

import TableContext from './TableDataContext';
import getPlanetsData, { columns } from '../services/swAPI';
import { first } from '../utils';

const { Provider } = TableContext;
const TableDataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ filterByName: '', filterByNumericValue: [] });
  useEffect(() => {
    first(setLoading(true))
      .then(getPlanetsData)
      .then(setData)
      .then(setLoading(false));
  }, []);
  const availableColumns = columns.filter((column) => column);
  const setFilterByName = (name) => {
    setFilters({ ...filters, filterByName: name });
  };

  const addFilterByNumericValue = ({ column, comparison, value }) => {
    setFilters(
      { ...filters,
        filterByNumericValue: [
          ...filters.filterByNumericValue,
          { column, comparison, value },
        ] },
    );
    console.log(filters);
  };

  return (
    e(Provider,
      { value: { data,
        loading,
        filters,
        setFilterByName,
        addFilterByNumericValue,
        availableColumns } },
      [
        children,
      ])
  );
};

TableDataProvider.propTypes = {
  children: arrayOf(object),
}.isRequired;

export default TableDataProvider;
