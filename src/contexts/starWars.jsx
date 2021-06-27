import { createContext } from 'react';

export const data = createContext({});
export const filters = createContext({
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [],
  },
});
