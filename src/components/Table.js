import React from 'react';
import { StarWarsContext } from '../provider/Provider';
import SelectFilter from './SelectFilter';

const Table = () => {
  const { data, filters, setFilters } = React.useContext(StarWarsContext);
  console.log(data);

  const thead = () => (
    <thead>
      <tr>
        {Object.keys({ ...data[0] }).map((title) => (<th key={ title }>{title}</th>))}
      </tr>
    </thead>
  );

  const tbody = () => (
    <tbody>
      {data.filter((planet) => planet.name.toLowerCase().includes(filters.filterByName))
        .map((elem) => (
          <tr key={ elem.name }>
            {Object.values(elem)
              .map((item) => <td key={ item }>{item}</td>)}
          </tr>))}
    </tbody>
  );

  const inputSearch = () => (
    <input
      data-testid="name-filter"
      value={ filters.filterByName }
      onChange={ (e) => setFilters({
        ...filters,
        filterByName: e.target.value.toLowerCase(),
      }) }
    />
  );

  return (
    <table>
      { inputSearch() }
      <SelectFilter setFilters={ setFilters } filters={ filters } />
      { thead() }
      { tbody() }
    </table>
  );
};

export default Table;
