import React, { useContext } from 'react';
import context from '../context/context';

const FilterInputs = () => {
  const { name, setName } = useContext(context);

  // const handleChange = ({ target }) => {
  //   setData(
  //     data.filter((planets) => planets.name.toLowerCase().includes(target.value)),
  //   );
  //   return data;
  // };

  return (
    <label htmlFor="name-filter">
      Busque por planetas:
      {' '}
      <input
        type="text"
        value={ name }
        data-testid="name-filter"
        onChange={ (e) => setName(e.target.value) }
        placeholder="Digite o nome do planeta"
      />
    </label>
  );
};

export default FilterInputs;
