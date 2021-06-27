import { useState } from 'react';

import filterByName from '../config/filters';

const initialFilters = {
  filterByName,
};

const useFilters = () => {
  const [filters, setFilters] = useState(initialFilters);
  return [filters, setFilters];
};

export default useFilters;
