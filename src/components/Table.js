import { createElement as e, useContext } from 'react';
import { isEmpty } from 'lodash';
import { div } from '../utils';

import TableContext from '../context/TableContext';
import TableContainer from './TableContainer';
import TableFilter from './TableFilter';

const Table = () => {
  const { data, loading } = useContext(TableContext);

  return loading || isEmpty(data) ? div('Loading')
    : [e(TableFilter), e(TableContainer)];
};

export default Table;
