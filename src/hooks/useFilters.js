import { useState } from 'react';

import { filterByName, filterByNumericValues } from '../config/filters';

const initialFilters = {
  filterByName,
  filterByNumericValues,
};

const useFilters = () => {
  const [filters, setFilters] = useState(initialFilters);
  return [filters, setFilters];
};

export default useFilters;
