import { useContext } from 'react';
import TableContext from '../context/TableContext';
import { input, label } from '../utils';

const TableFilter = () => {
  const { setFilterByName } = useContext(TableContext);

  const updateFilteredName = ({ target: { value } }) => setFilterByName(value);
  return (
    label([
      'Filtre pelo nome do planeta',
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

export default TableFilter;
