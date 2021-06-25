import { createElement as e, useContext } from 'react';
import { isEmpty } from 'lodash';
import { div } from '../utils';

import TableDataContext from '../context/TableDataContext';
import TableContainer from './TableContainer';
import Filters from './Filters';

const Table = () => {
  const { data, loading } = useContext(TableDataContext);

  return loading || isEmpty(data) ? div('Loading')
    : [e(Filters), e(TableContainer)];
};

export default Table;
