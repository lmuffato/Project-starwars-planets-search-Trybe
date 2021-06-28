import React, { useContext } from 'react';
import context from '../store/context';

const Filters = () => {
  const { filters, setFilters } = useContext(context);

  const handleChange = (e) => {
    setFilters({
      ...filters, // mantém filtros anteriores
      filterByName: { // acrescenta novo filtro na chave correta
        name: e.target.value,
      },
    });
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ ((e) => handleChange(e)) }
      />
    </div>
  );
};

export default Filters;
