import { createElement as e, useEffect, useState } from 'react';
import { arrayOf, object } from 'prop-types';

import TableContext from './TableContext';
import getPlanetsData from '../services/swAPI';

const { Provider } = TableContext;
const TableProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise
      .resolve(setLoading(true))
      .then(getPlanetsData)
      .then(setData)
      .then(setLoading(false));
  }, []);

  return (
    e(Provider,
      { value: { data, loading } },
      [
        children,
      ])
  );
};

TableProvider.propTypes = {
  children: arrayOf(object),
}.isRequired;

export default TableProvider;
