import React, { useContext } from 'react';
import context from '../context/context';

const FilterInputs = () => {
  const { data, setData } = useContext(context);

  const handleChange = (e) => {
    setData(
      data.filter((planets) => planets.name.toLowerCase().includes(e.target.value)),
    );
    return data;
  };

  return (
    <label htmlFor="name-filter">
      Busque por planetas:
      {' '}
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
        placeholder="Digite o nome do planeta"
      />
    </label>
  );
};

export default FilterInputs;
