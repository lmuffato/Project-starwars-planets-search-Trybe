import { useContext, useState } from 'react';
import { button, div, labelledRadio, selector } from '../utils';

import TableContext from '../context/TableDataContext';
import { columns } from '../services/swAPI';

const COLUMN_SORT = 'column-sort';
const SORT = 'sort';
const BUTTON_SORT = 'column-sort-button';
const RADIO_OPTIONS = 'radio-options';
const columnSelector = (state, setter) => selector('Coluna', {
  onChange: ({ target: { value } }) => setter({ ...state, [COLUMN_SORT]: value }),
  name: COLUMN_SORT,
  value: state[COLUMN_SORT],
}, ['name', ...columns]);
const radioOptions = (state, setter) => labelledRadio(RADIO_OPTIONS, [
  {
    labelText: 'ASC',
    name: 'column-sort-input-asc',
    onChange: (({ target: { value } }) => setter({ ...state, sort: value })),
    checked: state[SORT].includes('asc'),
  },
  {
    labelText: 'DESC',
    name: 'column-sort-input-desc',
    onChange: (({ target: { value } }) => setter({ ...state, sort: value })),
    checked: state[SORT].includes('desc'),
  },
]);
const changeSortingButton = (state, setter) => (
  button('Ordenar', {
    onClick: () => setter({
      column: state[COLUMN_SORT],
      sort: state[SORT].includes('asc') ? 'ASC' : 'DESC' }),
    type: 'button',
    key: BUTTON_SORT,
    'data-testid': BUTTON_SORT })
);
const SortFilter = () => {
  const [state, setState] = useState({
    [COLUMN_SORT]: 'name',
    [SORT]: 'column-sort-input-asc',
  });
  const { setSortBy } = useContext(TableContext);
  return div([
    columnSelector(state, setState),
    radioOptions(state, setState),
    changeSortingButton(state, setSortBy),
  ]);
};

export default SortFilter;
