import React, { useState, useEffect } from 'react';
import PlanetsList from './PlanetsList';

function Home() {
  const [search, setSearch] = useState('');
  const [itens, setItem] = useState('');
  const [conditions, setCondition] = useState('');
  const [valuation, setValuation] = useState('');
  const [clicks, setClicks] = useState(false);

  const handleChange = ({ target: { value } }) => setSearch(value);

  const population = ({ target: { value } }) => setItem(value);

  const condition = ({ target: { value } }) => setCondition(value);

  const valueUser = ({ target: { value } }) => setValuation(value);

  useEffect(() => {
    setClicks(false);
  }, [clicks]);

  return (
    <section>
      <header>
        <form>
          <input
            data-testid="name-filter"
            placeholder="Digite o nome"
            type="text"
            onChange={ handleChange }
          />
          <select data-testid="column-filter" onChange={ population }>
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
          <select data-testid="comparison-filter" onChange={ condition }>
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
          <input data-testid="value-filter" type="number" onChange={ valueUser } />
        </form>
      </header>
      <PlanetsList
        state={ search }
        itens={ itens }
        conditions={ conditions }
        number={ valuation }
      />
    </section>
  );
}

export default Home;
