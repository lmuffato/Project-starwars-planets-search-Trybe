import React, { useContext, useRef } from 'react';
import Context from '../context/Context';

function Search() {
  const {
    keys,
    setFilters,
    filters,
  } = useContext(Context);

  const nameRef = useRef();
  const coluna = useRef();
  const comparacao = useRef();
  const valor = useRef();

  const selectorOptions = keys
    .filter((key) => key !== 'name'
    && key !== 'climate'
    && key !== 'gravity'
    && key !== 'terrain'
    && key !== 'films'
    && key !== 'created'
    && key !== 'edited'
    && key !== 'residents'
    && key !== 'url');

  const getName = () => {
    setFilters({
      ...filters,
      filterByName: {
        name: nameRef.current.value,
      },
    });
  };

  const sendValuesFilters = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column: coluna.current.value,
          comparison: comparacao.current.value,
          value: valor.current.value,
        },
      ],
    });
  };

  const deleteOptions = () => {
    if (coluna.current) {
      return selectorOptions.filter((option) => option !== coluna.current.value);
    }
    return selectorOptions;
  };

  const options = deleteOptions();

  return (
    <header>
      <section>
        <input
          data-testid="name-filter"
          type="text"
          ref={ nameRef }
          onChange={ getName }
        />
      </section>
      <br />
      <section>
        <label htmlFor="Selector_One">
          <select
            data-testid="column-filter"
            name="selector_One"
            id="Selector_One"
            ref={ coluna }
          >
            { options
              .map((option, index) => (
                <option key={ index } value={ option }>
                  { option }
                </option>))}
          </select>
        </label>
      </section>
      <br />
      <section>
        <label htmlFor="Selector_Two">
          <select
            data-testid="comparison-filter"
            name="selector_Two"
            id="Selector_Two"
            ref={ comparacao }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
      </section>
      <br />
      <section>
        <input
          data-testid="value-filter"
          type="text"
          ref={ valor }
        />
      </section>
      <br />
      <section>
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => sendValuesFilters() }
        >
          Send
        </button>
      </section>
    </header>
  );
}

export default Search;
