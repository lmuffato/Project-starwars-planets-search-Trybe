import React, { useContext, useState } from 'react';
import context from '../context/context';

function Filter() {
  const { filters, setFilters } = useContext(context);
  const { name } = filters.filterByName;
  const { filterByNumericValues } = filters;
  // pego as chaves do estado global que esta dentro de filters pois para o o setChave de cada, preciso também usar a chave

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  console.log(comparison);

  const option = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const [optionFilter, setOptionFilter] = useState(option);

  function filterName(ev) {
    setFilters((previus) => ({
      ...previus,
      filterByName: {
        name: ev,
      },
    }));
  }
  // envio o valor do input para a chave name e altero altomaticamente no setFilters do estado global do provaider

  function filterNumeric(event) {
    event.preventDefault();

    setFilters((previus) => ({
      ...previus,
      filterByNumericValues: [
        ...previus.filterByNumericValues,
        {
          column, // aqui coloca as chaves do useSate
          comparison,
          value,
        },
      ],
    }));
    // salvo todas as alterações das chaves de filterByNumericValues no estado do componente Filter,
    // depois quando clico no botao envio todos esses valores para o setFilters para assima alterar o estado global do provaider

    if (filterByNumericValues.length > 0) {
      console.log(filterByNumericValues);
      option.forEach((item, index) => {
        // const filterOption = filterByNumericValues.filter((filter) => item !== filter.column);
        filterByNumericValues.forEach((filter) => {
          if (item === filter.column) setOptionFilter(optionFilter.splice(index, 1));
        });
      });
    }
    // requisito 4
    // aqui faço a condicional para saber se filterByNumericValues já foi preenchido anteriormente, se sim faço dois forEach
    // o primeiro passando por todos os intens do array option que eu criei (e que renderiza os options do select column)
    // assim a cada item do array option eu faço um novo forEach do filterByNumericValues e em seguinda faço uma condicional onde comparo o
    // o item do array option que estou "passando" no momento com cada filtro.column (o nome da coluna) de todos os objetos(filtros) de
    // filterByNumericValues, Se eles em algum momento forem iguais, eu tiro essa valor da chave optionFilter usando  o .splice
    // toda essa logica foi feita com a ajuda do Jõao Andrade Jr da turma 10.
  }

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (ev) => filterName(ev.target.value) }
        value={ name }
      />
      <form onSubmit={ filterNumeric }>
        <select
          data-testid="column-filter"
          onChange={ (ev) => setColumn(ev.target.value) }
        >
          { optionFilter
            .map((item) => <option key={ item } value={ item }>{ item }</option>) }

        </select>

        <select
          data-testid="comparison-filter"
          onChange={ (ev) => setComparison(ev.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          type="number"
          data-testid="value-filter"
          onChange={ (ev) => setValue(ev.target.value) }
        />
        <button type="submit" data-testid="button-filter">Filtrar</button>
      </form>
    </section>
  );
}

export default Filter;
