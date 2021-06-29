import { createElement as e, useContext } from 'react';
import { isEmpty } from 'lodash';
import { div } from '../utils';

import TableDataContext from '../context/TableDataContext';
import Filters from './Filters';
import AppliedFilters from './AppliedFilters';
import Table from './Table';

const TableContainer = () => {
  const { data, loading } = useContext(TableDataContext);

  return loading || isEmpty(data) ? div('Loading')
    : [
      e(Filters, { key: 'Filters' }),
      e(AppliedFilters, { key: 'AppliedFilters' }),
      e(Table, { key: 'Table' }),
    ];
};

export default TableContainer;
