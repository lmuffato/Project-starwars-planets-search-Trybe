import { createElement as e } from 'react';
import { div } from '../utils';

import NameFilter from './NameFilter';
import NumericFilters from './NumericFilters';

const Filters = () => (
  div([
    e(NameFilter, { key: 'NameFilter' }),
    e(NumericFilters, { key: 'NumericFilters' }),
  ])
);

export default Filters;
