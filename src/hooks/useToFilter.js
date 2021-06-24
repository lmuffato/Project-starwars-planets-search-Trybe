import { useState } from 'react';
import useStarWars from './useStarWars';

export default function useToFilter() {
  const { filter, setFilter } = useStarWars();

  const [category, setCategory] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);

  const addNewFilter = () => {
    const newFilter = {
      ...filter,
      filterByNumericValues: [
        ...filter.filterByNumericValues,
        { category, comparison, value },
      ],
    };
    setFilter(newFilter);
  };

  const dropdownCategories = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const dropdownComparasion = ['maior que', 'menor que', 'igual a'];

  return {
    setCategory,
    setComparison,
    setValue,
    addNewFilter,
    dropdownCategories,
    dropdownComparasion,
  };
}
