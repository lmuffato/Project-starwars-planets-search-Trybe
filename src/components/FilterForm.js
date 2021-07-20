import React, { useState, useEffect } from 'react';
import Table from './Table';

function Home() {
  const [search, setSearch] = useState('');
  const [dropItem, setDropItem] = useState('');
  const [dropCondition, setDropedCondition] = useState('');
  const [number, setNumber] = useState('');
  const [clicked, setClicked] = useState(false);

  const onChange = ({ target: { value } }) => setSearch(value);
  const setDropPopulation = ({ target: { value } }) => setDropItem(value);
  const setDropCondition = ({ target: { value } }) => setDropedCondition(value);
  const setNumbered = ({ target: { value } }) => setNumber(value);

  useEffect(() => {
    setClicked(false);
  }, [clicked]);

  return (
    <section>
      <header>
        <form>
          <input
            data-testid="name-filter"
            placeholder="Digite o nome"
            type="text"
            onChange={ onChange }
          />
          <select data-testid="column-filter" onChange={ setDropPopulation }>
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
          <select data-testid="comparison-filter" onChange={ setDropCondition }>
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
          <input data-testid="value-filter" type="number" onChange={ setNumbered } />
        </form>
      </header>
      <Table
        state={ search }
        dropItem={ dropItem }
        dropCondition={ dropCondition }
        number={ number }
      />
    </section>
  );
}

export default Home;
