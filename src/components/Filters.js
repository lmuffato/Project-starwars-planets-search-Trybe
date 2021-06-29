import { createElement as e } from 'react';
import { div } from '../utils';

import NameFilter from './NameFilter';
import NumericFilters from './NumericFilters';
import SortFilter from './SortFilter';

const Filters = () => (
  div([
    e(NameFilter, { key: 'NameFilter' }),
    e(NumericFilters, { key: 'NumericFilters' }),
    e(SortFilter, { key: 'SortFilter' }),
  ])
);

export default Filters;
