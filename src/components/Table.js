import { useContext } from 'react';
import { isEmpty } from 'lodash';
import { div } from '../utils';

import TableContext from '../context/TableContext';
import TableContainer from './TableContainer';

const Table = () => {
  const { data, loading } = useContext(TableContext);
  return loading || isEmpty(data) ? div('Loading') : TableContainer(data);
};

export default Table;
