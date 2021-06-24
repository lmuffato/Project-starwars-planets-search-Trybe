import React, { useContext } from 'react';
import StarwarsContext from '../context/context';

export default function FilterTable() {
  const { filters, setFilters } = useContext(StarwarsContext);
  const { filterByNumericValues } = filters;

  const handleExcludeButton = ({ target }) => {
    const { value } = target;
    const filtered = filterByNumericValues.filter(({ column }) => column !== value);
    setFilters((pastState) => ({
      ...pastState,
      filterByNumericValues: [...filtered],
    }));
  };

  const mapList = () => filterByNumericValues.map((obj) => (
    <li key={ obj.value } data-testid="filter">
      <p>{obj.column}</p>
      <p>{obj.comparison}</p>
      <p>{obj.value}</p>
      <button
        value={ obj.column }
        onClick={ handleExcludeButton }
        type="button"
      >
        X
      </button>
    </li>
  ));

  return (
    <div>
      <ul>
        { mapList() }
      </ul>
    </div>
  );
}
