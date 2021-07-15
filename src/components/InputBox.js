import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../style/input.css';

function InputBox() {
  const { filters, setFilters } = useContext(StarWarsContext);

  const handleInputText = (event) => {
    setFilters({ ...filters, filterByName: { name: event.target.value.toLowerCase() } });
  };

  return (
    <label htmlFor="inputBox">
      Digite o nome do planeta:
      <input
        id="inputBox"
        name="inputBox"
        data-testid="name-filter"
        type="text"
        placeholder="Digite o planeta a ser filtrado"
        onChange={ (event) => handleInputText(event) }
      />
      { console.log(filters.filterByName.name.toLowerCase())}
    </label>
  );
}

export default InputBox;
