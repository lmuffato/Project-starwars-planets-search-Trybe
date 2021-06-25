import { useContext, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import {
  button, comparisons, div, label, labelledInput, option, select,
} from '../utils';

import TableDataContext from '../context/TableDataContext';

const COLUMN_FILTER = 'column-filter';
const COMPARISON_FILTER = 'comparison-filter';
const VALUE_FILTER = 'value-filter';
const BUTTON_FILTER = 'button-filter';
const selector = (labelText, selectData, optionsData) => label(
  [
    labelText,
    select(
      optionsData.map((option)),
      {
        ...selectData,
        'data-testid': selectData.name,
      },
    ),
  ],
);

const handleOnChange = (state, setState) => ({ target: { name, value } }) => {
  setState({ ...state, [name]: value });
};
const handleOnClick = (state, setState, addFilterByNumericValue) => () => {
  addFilterByNumericValue(
    {
      column: state[COLUMN_FILTER],
      comparison: state[COMPARISON_FILTER],
      value: state[VALUE_FILTER],
    },
  );
};
const NumericFilters = () => {
  const { addFilterByNumericValue, availableColumns } = useContext(TableDataContext);
  const [state, setState] = useState({});
  useEffect(() => {
    setState({
      [COLUMN_FILTER]: availableColumns[0],
      [COMPARISON_FILTER]: comparisons[0],
      [VALUE_FILTER]: '',
    });
  }, [availableColumns]);

  const columnSelector = () => selector('Coluna', {
    onChange: handleOnChange(state, setState),
    name: COLUMN_FILTER,
    value: state[COLUMN_FILTER],
  }, availableColumns);
  const comparisonSelector = () => selector(
    'Comparação', {
      onChange: handleOnChange(state, setState),
      name: COMPARISON_FILTER,
      value: state[COMPARISON_FILTER],
    }, comparisons,
  );
  const valueInputBox = () => labelledInput(
    'Valor', {
      onChange: handleOnChange(state, setState),
      value: state[VALUE_FILTER],
      key: VALUE_FILTER,
      type: 'number',
      'data-testid': VALUE_FILTER,
    }, VALUE_FILTER,
  );
  const addFilterButton = () => (
    button('Adicionar filtro', {
      onClick: handleOnClick(state, setState, addFilterByNumericValue),
      type: 'button',
      key: BUTTON_FILTER,
      'data-testid': BUTTON_FILTER })
  );
  return (
    !isEmpty(availableColumns)
    && div(
      [
        columnSelector(),
        comparisonSelector(),
        valueInputBox(),
        addFilterButton(),
      ],
    )
  );
};

export default NumericFilters;
