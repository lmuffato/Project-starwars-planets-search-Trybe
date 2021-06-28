import React from 'react';
import { StarWarsContext } from '../provider/Provider';

const Table = () => {
  const data = React.useContext(StarWarsContext);
  const [filterByName, setFilterByName] = React.useState('');
  console.log(Object.keys({ ...data[0] }));

  const thead = () => (
    <thead>
      <tr>
        {Object.keys({ ...data[0] }).map((title) => (<th key={ title }>{title}</th>))}
      </tr>
    </thead>
  );

  const tbody = () => (
    <tbody>
      {data.filter((planet) => planet.name.toLowerCase().includes(filterByName))
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
      value={ filterByName }
      onChange={ (e) => setFilterByName(e.target.value) }
    />
  );

  return (
    <table>
      { inputSearch() }
      { thead() }
      { tbody() }
    </table>
  );
};

export default Table;
