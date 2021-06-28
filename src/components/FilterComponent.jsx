import React, { useContext } from 'react';
import Context from '../context/Context';

const FilterComponent = () => {
  const { dataRead, dataFilterWrite, filtersWrite, filters } = useContext(Context); // posso ter x variáveis no mesmo contexto
  // devo alterar este dataRead, aplicando filtro durante onChange do input.
  // este array filtrado devo setar no estado como outra variável.
  // console.log(dataRead);

  const handleChange = (ev) => {
    const dataLocal = dataRead;
    const dataFiltered = dataLocal
      .filter((data) => data.name.includes(ev.target.value));
    // console.log(dataFiltered); // array filtrado (este array deve ficar sendo alterado no estado?!)
    dataFilterWrite(dataFiltered); // seta array filtrado (dados filtrados)
    filtersWrite({ // seta filtros
      ...filters,
      filteredByName: {
        name: ev.target.value,
      },
    });
  };

  return (
    <form>
      <label htmlFor="inputText">
        Buscar:
        <input
          data-testid="name-filter"
          type="text"
          id="inputText"
          onChange={ handleChange }
        />
      </label>
    </form>
  );
};

export default FilterComponent;
