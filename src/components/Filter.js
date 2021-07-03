import React, { useContext, useState } from 'react';
import context from '../context/context';

function Filter() {
  const { planets, filters, setFilters } = useContext(context);
  const { name } = filters.filterByName;
  const { filterByNumericValues } = filters;
  // pego as chaves do estado global que esta dentro de filters pois para o o setChave de cada, preciso também usar a chave

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  console.log(comparison);

  // const arrayOption = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const [option] = useState(['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
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

    // const arrayNumericFilter = planets.filter((planet) => {
    //   if (comparison === 'maior que') return Number(planet[column]) > Number(value);
    //   if (comparison === 'menor que') return Number(planet[column]) < Number(value);
    //   if (comparison === 'igual a') return Number(planet[column]) === Number(value);
    //   return planets;
    // });

    // setFilters((previus) => ({
    //   ...previus,
    //   filterByNumericValues: arrayNumericFilter,
    // }));

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

    // const filterOption = option.filter((item) => item !== column);
    // let filterTeste = [];
    if (filterByNumericValues.length > 0) {
      console.log(filterByNumericValues);
      option.forEach((item, index) => {
        console.log(item);
        // const filterOption = filterByNumericValues.filter((filter) => item !== filter.column);
        filterByNumericValues.forEach((filter) => {
          console.log(filter.column);
          if (item === filter.column) setOptionFilter(optionFilter.splice(index, 1));
          // console.log(filterTeste);
        });
        // console.log(filterTeste);
        // setOptionFilter(filterTeste);
      });
    }
    console.log(optionFilter);
    // setOption(filterOption);
  }
  // salvo todas as alterações das chaves de filterByNumericValues no estado do componente Filter,
  // depois quando clico no botao envio todos esses valores para o setFilters para assima alterar o estado global do provaider

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
          <option hidden>Column</option>
          { optionFilter.map((item) => <option key={ item } value={ item }>{item}</option>)}
          {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}
        </select>

        <select
          data-testid="comparison-filter"
          onChange={ (ev) => setComparison(ev.target.value) }
        >
          <option hidden>Comparison</option>
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
