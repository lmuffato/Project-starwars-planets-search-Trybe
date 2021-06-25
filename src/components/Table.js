import { createElement as e, useContext } from 'react';
import { isEmpty } from 'lodash';
import { div } from '../utils';

import TableDataContext from '../context/TableDataContext';
import Filters from './Filters';
import AppliedFilters from './AppliedFilters';
import TableContainer from './TableContainer';

const Table = () => {
  const { data, loading } = useContext(TableDataContext);

  return loading || isEmpty(data) ? div('Loading')
    : [
      e(Filters, { key: 'Filters' }),
      e(AppliedFilters, { key: 'AppliedFilters' }),
      e(TableContainer, { key: 'TableContainer' }),
    ];
};

export default Table;
