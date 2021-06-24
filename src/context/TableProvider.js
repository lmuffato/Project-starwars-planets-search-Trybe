import { createElement as e, useEffect, useState } from 'react';
import { arrayOf, object } from 'prop-types';

import TableContext from './TableContext';
import getPlanetsData from '../services/swAPI';
import { first } from '../utils';

const { Provider } = TableContext;
const TableProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ });

  useEffect(() => {
    first(setLoading(true))
      .then(getPlanetsData)
      .then(setData)
      .then(setLoading(false));
  }, []);

  const setFilterByName = (name) => {
    setFilters({ ...filters, filterByName: name });
  };

  return (
    e(Provider,
      { value: { data, loading, filters, setFilterByName } },
      [
        children,
      ])
  );
};

TableProvider.propTypes = {
  children: arrayOf(object),
}.isRequired;

export default TableProvider;
