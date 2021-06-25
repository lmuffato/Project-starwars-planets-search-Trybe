import React, { useState, useContext } from 'react';
import Context from '../context/Context';

function Search() {
  const {
    keys,
    setFilters,
    filters: {
      filterByName: { name },
      filterByNumericValues: [{ column, comparison, value }],
    },
  } = useContext(Context);

  const [coluna, setColuna] = useState('');
  const [comparacao, setComparacao] = useState('');
  const [valor, setValor] = useState('');

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

  console.log(selectorOptions);

  const getName = (e) => {
    setFilters({
      filterByName: {
        name: e.target.value,
      },
    });
  };

  const sendValuesFilters = () => {
    setFilters((filters) => ({
      filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column: coluna,
          comparison: comparacao,
          value: valor,
        },
      ],
    }));
  };

  return (
    <header>
      <section>
        <input
          data-testid="name-filter"
          type="text"
          value={ name }
          onChange={ (e) => getName(e) }
        />
      </section>
      <br />
      <section>
        <label htmlFor="Selector_One">
          <select
            data-testid="column-filter"
            name="selector_One"
            id="Selector_One"
            value={ column }
            onChange={ (e) => setColuna(e.target.value) }
          >
            { selectorOptions
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
            value={ comparison }
            onChange={ (e) => setComparacao(e.target.value) }
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
          value={ valor }
          onChange={ (e) => setValor(e.target.value) }
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
