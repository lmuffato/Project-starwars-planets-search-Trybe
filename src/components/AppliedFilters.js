import { useContext } from 'react';
import { button, div } from '../utils';

import TableDataContext from '../context/TableDataContext';

const AppliedFilters = () => {
  const { filters: { filterByNumericValue },
    removeFilterByNumericValue } = useContext(TableDataContext);
  return filterByNumericValue && filterByNumericValue.map(
    ({ column, comparison, value }) => div(
      [`Filtrado por ${column} ${comparison} ${value}`,
        button('X',
          { value: column,
            onClick: ({ target }) => removeFilterByNumericValue(target.value) }),
      ],
      { 'data-testid': 'filter' },
    ),
  );
};

export default AppliedFilters;
