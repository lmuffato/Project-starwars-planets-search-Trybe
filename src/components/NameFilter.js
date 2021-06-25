import { useContext } from 'react';

import { input, label } from '../utils';
import TableContext from '../context/TableDataContext';

const NameFilter = () => {
  const { setFilterByName } = useContext(TableContext);

  const updateFilteredName = (
    { target: { value } },
  ) => setFilterByName(value);
  return (
    label([
      'Nome',
      input(
        null, {
          onChange: updateFilteredName,
          name: 'planetName',
          'data-testid': 'name-filter',
        },
      ),
    ],
    { htmlFor: 'planetName' })
  );
};

export default NameFilter;
