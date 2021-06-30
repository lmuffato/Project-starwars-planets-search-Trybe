import React, { useContext } from 'react';
import Context from '../../../../context/Context';

function Infos() {
  const { filters, setFilters } = useContext(Context);
  const { filters: { filterByNumericValues } } = filters;

  const removeFilter = ({ target }) => {
    const filterInfos = target.previousSibling.textContent;

    setFilters(({ filters: prev }) => {
      const { filterByNumericValues: numericValues } = prev;

      const updatedFilter = numericValues.filter(({ column }) => (
        !filterInfos.includes(column)
      ));

      return {
        filters: {
          ...prev,
          filterByNumericValues: updatedFilter,
        },
      };
    });
  };

  return (
    <section>
      {filterByNumericValues.map((numericFilter, index) => (
        <div key={ index } data-testid="filter" style={ { display: 'flex' } }>
          <p key={ numericFilter.column }>
            {
              `{column: ${numericFilter.column},
              comparison: ${numericFilter.comparison},
              value: ${numericFilter.findByValue}}`
            }
          </p>
          <button type="button" onClick={ removeFilter }>X</button>
        </div>
      ))}
    </section>
  );
}

export default Infos;
