import { useContext } from 'react';
import { labelledInput } from '../utils';

import TableContext from '../context/TableDataContext';

const NameFilter = () => {
  const { setFilterByName } = useContext(TableContext);

  const updateFilteredName = (
    { target: { value } },
  ) => setFilterByName(value);
  return (
    labelledInput(
      'Nome',
      {
        onChange: updateFilteredName,
        'data-testid': 'name-filter',
      },
      'planetName',
    )
  );
};

export default NameFilter;
