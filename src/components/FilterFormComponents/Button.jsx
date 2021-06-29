import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';

export default function Button() {
  const { filterPlanets, setActiveFilter } = useContext(MainContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setActiveFilter(true);
    filterPlanets();
  };

  return (
    <button type="submit" data-testid="button-filter" onClick={ handleSubmit }>
      Aplicar Filtro
    </button>
  );
}
